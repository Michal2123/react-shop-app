import { Link } from "react-router-dom";
import { Navbar, Image, Nav } from "react-bootstrap";
import logo from "../assets/images/logo.png";
import NavbarForm from "./NavbarForm";
import NavbarButton from "./NavbarButton";
import NavbarCart from "./NavbarCart";
import NavbarUserDropdown from "./NavbarUserDropdown";

const NavigationBar = () => {
  return (
    <Navbar
      expand={"md"}
      className="justify-content-between navbar-expand-lg shadow-sm q"
      fixed="top"
    >
      <Navbar.Brand className="d-flex mx-0 p-0" style={{ width: "35%" }}>
        <Link to={"/"} className="align-middle mb-0 ms-4">
          <Image src={logo} style={{ height: "60px" }} />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle className="me-3" aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav
          className="navbar-form mb-2 mb-md-0 mt-4 mt-md-0 ms-3 ms-md-0 me-auto "
          style={{ width: "300px", height: "40px" }}
        >
          <NavbarForm />
        </Nav>

        <Nav className="me-4">
          <NavbarButton title="Product" route="/products" />
          <NavbarCart />
          <NavbarUserDropdown />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
