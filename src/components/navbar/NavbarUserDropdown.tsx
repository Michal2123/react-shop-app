import { useContext } from "react";
import { AuthContext } from "../../context/AuthenticationContext";
import { Image } from "react-bootstrap";
import CustomeDropdown from "../customes/CustomeDropdown";
import userIcon from "../../assets/icons/user-icon.png";
import NavbarButton from "./NavbarButton";
import { ThemeContext } from "../../context/ThemeContext";

const NavbarUserDropdown = ({
  className,
}: React.HTMLAttributes<HTMLElement>) => {
  const { user } = useContext(AuthContext);
  const { isDark } = useContext(ThemeContext);
  return (
    <div className={className}>
      <div className="p-0 pt-1 mx-auto my-2 my-md-0">
        {user ? (
          <CustomeDropdown>
            <Image
              className="icon-nav"
              data-bs-theme={isDark ? "dark" : "light"}
              src={userIcon}
              fluid
              style={{ minWidth: "30px" }}
            />
          </CustomeDropdown>
        ) : (
          <NavbarButton title="Sign in" route="/signin" />
        )}
      </div>
    </div>
  );
};

export default NavbarUserDropdown;
