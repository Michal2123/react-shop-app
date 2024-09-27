import { NavLink } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

interface Prop {
  title: string;
  route: string;
}

const NavbarButton = ({ title, route }: Prop) => {
  const { isDark } = useContext(ThemeContext);
  return (
    <NavLink to={route} className="my-2 my-md-0  ms-3 ms-md-0">
      {({ isActive }) => (
        <button
          className={`rounded-0 custome-btn-nav ${isDark ? "dark" : "light"}  ${
            isActive && "active"
          }`}
        >
          {title}
        </button>
      )}
    </NavLink>
  );
};

export default NavbarButton;
