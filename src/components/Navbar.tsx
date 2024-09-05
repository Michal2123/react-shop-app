import { Link } from "react-router-dom";
import { Navbar, Form, InputGroup, Button, Image } from "react-bootstrap";
import logo from "../assets/images/logo.png";
import cartIcon from "../assets/icons/cart-icon.png";
const TopBar = () => {
  const cartCount = 1;
  return (
    <Navbar
      className="justify-content-between shadow-sm q"
      fixed="top"
      style={{ height: 75 }}
    >
      <Navbar.Brand className="d-flex w-25 mx-0 p-0">
        <Link to={"/"} className=" mx-auto mb-0 align-middle">
          <Image src={logo} style={{ height: "150px" }} />
        </Link>
      </Navbar.Brand>

      <Form className="d-flex w-50 h-75  navbar-form justify-content-center">
        <InputGroup className="w-75">
          <Form.Control
            placeholder="Search"
            type="text"
            className="shadow-none rounded-0 input-nav-search"
          />
          <Button className="rounded-0 btn-nav-search ">Search</Button>
        </InputGroup>
      </Form>
      <div className="d-flex w-25 h-75 me-2">
        <Link
          to={"/products"}
          className=" link-nav mx-1 px-2 pt-1 mb-0  align-middle "
        >
          Products
        </Link>
        <Link
          to={"/cart"}
          className={`${
            cartCount > 0 ? "position-relative" : ""
          } mx-auto mb-0 pt-1 align-middle `}
        >
          <Image src={cartIcon} className="icon-nav" fluid />
          {cartCount > 0 ? (
            <div className=" cart-count-nav position-absolute bottom-0 end-0">
              <div
                style={
                  cartCount > 99
                    ? { fontSize: "8px", marginTop: "1px" }
                    : { fontSize: "12px", marginTop: "-2px" }
                }
              >
                {cartCount}
              </div>
            </div>
          ) : null}
        </Link>
        <Link to={"/"} className=" link-nav mx-1 px-2 pt-1 mb-0  align-middle ">
          Sing in
        </Link>
      </div>
    </Navbar>
  );
};

export default TopBar;
