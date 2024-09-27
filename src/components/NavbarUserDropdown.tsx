import { useContext } from "react";
import { AuthContext } from "../context/AuthenticationContext";
import { Image } from "react-bootstrap";
import CustomeDropdown from "./CustomeDropdown";
import userIcon from "../assets/icons/user-icon.png";
import NavbarButton from "./NavbarButton";
import { ThemeContext } from "../context/ThemeContext";

const NavbarUserDropdown = () => {
  const { user } = useContext(AuthContext);
  const { isDark } = useContext(ThemeContext);
  return (
    <>
      {user ? (
        <div className={`p-0 pt-1 mx-3 my-2 my-md-0`}>
          <CustomeDropdown>
            <Image
              className={`icon-nav  ${isDark ? "dark" : "light"}`}
              src={userIcon}
              fluid
              style={{ minWidth: "30px" }}
            />
          </CustomeDropdown>
        </div>
      ) : (
        <NavbarButton title="Sign in" route="/signin" />
      )}
    </>
  );
};

export default NavbarUserDropdown;
