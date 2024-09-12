import { useContext } from "react";
import { AuthContext } from "../context/AuthenticationContext";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRout = () => {
  const { user } = useContext(AuthContext);
  if (user) {
    return <Navigate to={"/"} />;
  }
  return <Outlet />;
};

export default ProtectedRout;
