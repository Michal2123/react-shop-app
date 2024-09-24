import { ReactNode, useContext, useState } from "react";
import { ErrorContext } from "../context/ErrorContext";
import { UpdateAuthContext } from "../context/AuthenticationContext";

interface Prop {
  children: ReactNode;
}

const ErrorProvider = ({ children }: Prop) => {
  const { logOut } = useContext(UpdateAuthContext);
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  function clearErrorMessage() {
    setErrorMessage(undefined);
  }

  function handleError(status: string, message: string) {
    switch (status) {
      case "401":
        alert("Session has expired.");
        console.log("Session has expired.");
        setErrorMessage("Session has expired.");
        logOut();
        break;

      default:
        alert(`${status}: ${message}`);
        console.log(`${status}: ${message}`);
        setErrorMessage(`${status}: ${message}`);
        break;
    }
  }
  return (
    <ErrorContext.Provider
      value={{
        errorMessage,
        clearErrorMessage,
        handleError,
      }}
    >
      {children}
    </ErrorContext.Provider>
  );
};

export const useError = () => useContext(ErrorContext);

export default ErrorProvider;
