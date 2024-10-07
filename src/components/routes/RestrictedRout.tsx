import { useContext } from "react";
import { AuthContext } from "../../context/AuthenticationContext";
import { Navigate, Outlet } from "react-router-dom";

const RestrictedRout = () => {
  const { user } = useContext(AuthContext);
  if (user) {
    return <Outlet />;
  }
  return <Navigate to={"/"} />;
};

export default RestrictedRout;
