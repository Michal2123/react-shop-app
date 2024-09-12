import { useState } from "react";
import {
  AuthContext,
  UpdateAuthContext,
} from "../context/AuthenticationContext";
import { IUser } from "../interfaces/AuthenticationInterface";

interface Prop {
  children: any;
}

function getInitialUserState() {
  const json = localStorage.getItem("user");
  return json !== null ? (JSON.parse(json) as IUser) : undefined;
}

const AuthenticationProvider = ({ children }: Prop) => {
  const [user, setUser] = useState<IUser | undefined>(getInitialUserState());

  function logIn(user: IUser) {
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  }

  function logOut() {
    localStorage.removeItem("user");
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
