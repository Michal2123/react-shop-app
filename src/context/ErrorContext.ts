import { createContext } from "react";
import { IErrorContext } from "../interfaces/ErrorInterface";

export const ErrorContext = createContext<IErrorContext>({
  errorMessage: undefined,
  handleError: () => undefined,
  clearErrorMessage: () => undefined,
});
