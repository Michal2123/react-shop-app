import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";

interface Prop extends React.HTMLAttributes<HTMLElement> {
  title: string;
  route: string;
}

const NavbarButton = ({ title, route, className }: Prop) => {
  const { isDark } = useContext(ThemeContext);
  return (
    <div className={className}>
      <NavLink to={route} className="my-2 my-md-0  ms-0">
        {({ isActive }) => (
          <button
            className={`rounded-0 custome-btn-nav ${isActive && "active"}`}
            data-bs-theme={isDark ? "dark" : "light"}
          >
            {title}
          </button>
        )}
      </NavLink>
    </div>
  );
};

export default NavbarButton;
