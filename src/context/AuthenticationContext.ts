import { createContext } from "react";
import {
  IAuthContext,
  IUpdateAuthContext,
} from "../interfaces/AuthenticationInterface";

export const AuthContext = createContext<IAuthContext>({ user: undefined });

export const UpdateAuthContext = createContext<IUpdateAuthContext>({
  logIn: () => undefined,
  logOut: () => undefined,
  updateUser: () => undefined,
});
