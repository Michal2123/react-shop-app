import { Dropdown } from "react-bootstrap";
import CustomToggle from "./CustomDropdownToggle";
import { ReactNode, useContext, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { UpdateAuthContext } from "../context/AuthenticationContext";
interface Props {
  children?: ReactNode;
}
const CustomeDropdown = ({ children }: Props) => {
  const { logOut } = useContext(UpdateAuthContext);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const dropdownMenuRef = useRef<HTMLDivElement | null>(null);

  function handleClickCloseDropdown() {
    dropdownRef.current?.classList.remove("show");
    dropdownMenuRef.current?.classList.remove("show");
  }

  return (
    <Dropdown ref={dropdownRef}>
      <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
        {children}
      </Dropdown.Toggle>

      <Dropdown.Menu align={"end"} className="mt-3" ref={dropdownMenuRef}>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `dropdown-item ${isActive ? "active" : ""}`
          }
          onClick={handleClickCloseDropdown}
        >
          Profile
        </NavLink>
        <NavLink
          to="/history"
          className={({ isActive }) =>
            `dropdown-item ${isActive ? "active" : ""}`
          }
          onClick={handleClickCloseDropdown}
        >
          Order history
        </NavLink>

        <Link
          to="/"
          className="dropdown-item"
          onClick={() => {
            handleClickCloseDropdown();
            logOut();
          }}
        >
          Log out
        </Link>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default CustomeDropdown;
