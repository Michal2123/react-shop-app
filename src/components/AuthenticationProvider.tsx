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
    localStorage.setItem("user", JSON.stringify(authData.user));
    localStorage.setItem("token", JSON.stringify(authData.accessToken));
    setUser(authData.user);
  }

  function logOut() {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("history");
    setUser(undefined);
  }

  return (
    <AuthContext.Provider value={{ user: user }}>
      <UpdateAuthContext.Provider value={{ logIn, logOut }}>
        {children}
      </UpdateAuthContext.Provider>
    </AuthContext.Provider>
  );
};

export default AuthenticationProvider;
