import { Dropdown } from "react-bootstrap";
import CustomToggle from "./CustomDropdownToggle";
import { ReactNode, useContext } from "react";
import { NavLink } from "react-router-dom";
import { UpdateAuthContext } from "../context/AuthenticationContext";
interface Props {
  children?: ReactNode;
}
const CustomeDropdown = ({ children }: Props) => {
  const { logOut } = useContext(UpdateAuthContext);
  return (
    <Dropdown>
      <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
        {children}
      </Dropdown.Toggle>

      <Dropdown.Menu
        align={"end"}
        className="mt-3 collapse"
        id="customeDropdown"
      >
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `dropdown-item ${isActive ? "active" : ""}`
          }
        >
          Profile
        </NavLink>
        <NavLink
          to="/history"
          className={({ isActive }) =>
            `dropdown-item ${isActive ? "active" : ""}`
          }
        >
          Order history
        </NavLink>

        <NavLink to="/" className="dropdown-item" onClick={logOut}>
          Log out
        </NavLink>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default CustomeDropdown;
