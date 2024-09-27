import { Dropdown } from "react-bootstrap";
import CustomToggle from "./CustomDropdownToggle";
import { ReactNode, useContext, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { UpdateAuthContext } from "../context/AuthenticationContext";
interface Props {
  children?: ReactNode;
}
const CustomeDropdown = ({ children }: Props) => {
  const { logOut } = useContext(UpdateAuthContext);
  const [show, setShow] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const dropdownMenuRef = useRef<HTMLDivElement | null>(null);

  const navigator = useNavigate();

  function handleClickCloseDropdown(route: string) {
    navigator(route);
    setShow(!show);
  }

  return (
    <Dropdown ref={dropdownRef} show={show} onBlur={() => setShow(false)}>
      <Dropdown.Toggle
        onClick={() => setShow(!show)}
        as={CustomToggle}
        id="dropdown-custom-components"
      >
        {children}
      </Dropdown.Toggle>

      <Dropdown.Menu align={"end"} className="mt-3" ref={dropdownMenuRef}>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `dropdown-item ${isActive ? "active" : ""}`
          }
          onMouseDown={() => handleClickCloseDropdown("/profile")}
        >
          Profile
        </NavLink>
        <NavLink
          to="/history"
          className={({ isActive }) =>
            `dropdown-item ${isActive ? "active" : ""}`
          }
          onMouseDown={() => handleClickCloseDropdown("/history")}
        >
          Order history
        </NavLink>

        <Link
          to="/"
          className="dropdown-item"
          onMouseDown={() => {
            handleClickCloseDropdown("/");
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
