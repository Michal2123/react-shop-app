import { ReactNode, useState } from "react";
import {
  AuthContext,
  UpdateAuthContext,
} from "../context/AuthenticationContext";
import { IAuthData, IUser } from "../interfaces/AuthenticationInterface";

interface Prop {
  children: ReactNode;
}

function getInitialUserState() {
  const json = localStorage.getItem("user");
  return json !== null ? (JSON.parse(json) as IUser) : undefined;
}

const AuthenticationProvider = ({ children }: Prop) => {
  const [user, setUser] = useState<IUser | undefined>(getInitialUserState());

  function logIn(authData: IAuthData) {
    localStorage.setItem("token", JSON.stringify(authData.accessToken));
    updateUser(authData.user);
  }

  function logOut() {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("history");
    setUser(undefined);
  }

  function updateUser(user: IUser) {
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  }

  return (
    <AuthContext.Provider value={{ user: user }}>
      <UpdateAuthContext.Provider value={{ logIn, logOut, updateUser }}>
        {children}
      </UpdateAuthContext.Provider>
    </AuthContext.Provider>
  );
};

export default AuthenticationProvider;
