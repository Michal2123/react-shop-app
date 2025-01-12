import { Link } from "react-router-dom";
import { Navbar, Image, Nav } from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import NavbarButton from "./NavbarButton";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import NavbarForm from "./NavbarForm";
import NavbarThemeSwitch from "./NavbarThemeSwitch";
import NavbarCart from "./NavbarCart";
import NavbarUserDropdown from "./NavbarUserDropdown";
import { AuthContext } from "../../context/AuthenticationContext";

const NavigationBar = () => {
  const { isDark } = useContext(ThemeContext);
  const { user } = useContext(AuthContext);
  return (
    <div className="container-fluid ">
      {" "}
      <Navbar
        variant={`${isDark ? "dark" : "light"}`}
        expand={"md"}
        className="row-2 row-md-3 shadow-sm"
        fixed="top"
      >
        <Navbar.Brand className="col col-md-3 mx-0 p-0">
          <Link to={"/"} className="align-middle mb-0 ms-4">
            <Image src={logo} style={{ height: "60px" }} />
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle
          className="col-4 me-3 ms-3"
          aria-controls="basic-navbar-nav"
          style={{ width: "60px" }}
        />

        <div className="col-9">
          <Navbar.Collapse className="row justify-content-between ms-3 ms-md-0 mt-2 mt-md-0">
            <Nav
              className={`col-8 ${
                user ? "col-md-6" : "col-md-5"
              } col-xl-6 navbar-form p-0`}
            >
              <NavbarForm />
            </Nav>

            <Nav
              className={`col-8 ${
                user ? "col-md-6" : "col-md-7"
              } col-xl-5 p-0 text-end pe-md-3`}
            >
              <div className="row row-md-4 align-items-center justify-content-end w-100 ms-2 ms-md-0 mt-2 mt-md-0">
                <NavbarThemeSwitch className="col-12 col-md-3 p-0 text-start text-md-center mb-1 mb-md-0" />
                <NavbarButton
                  className="col-12 col-md-4 col-xl-3 p-0 mx-1 text-start text-md-center"
                  title="Product"
                  route="/products"
                />
                <NavbarCart className="col-12 col-md-2 col-xl-2 p-0" />
                <NavbarUserDropdown
                  className={`col-12 ${
                    user ? "col-md-2 col-xl-2" : "col-md-3 col-xl-3"
                  } p-0 text-start text-md-center`}
                />
              </div>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
