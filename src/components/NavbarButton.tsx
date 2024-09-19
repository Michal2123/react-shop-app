import { NavLink } from "react-router-dom";

interface Prop {
  title: string;
  route: string;
}

const NavbarButton = ({ title, route }: Prop) => {
  return (
    <NavLink to={route} className="my-2 my-md-0  ms-3 ms-md-0">
      {({ isActive }) => (
        <button
          className={`rounded-0 custome-btn-nav  ${isActive && "active"} h-100`}
        >
          {title}
        </button>
      )}
    </NavLink>
  );
};

export default NavbarButton;
