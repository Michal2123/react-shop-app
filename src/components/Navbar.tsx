import { Link } from "react-router-dom";
import { Navbar, Form, InputGroup, Button } from "react-bootstrap";
const TopBar = () => {
  return (
    <Navbar
      className="justify-content-between shadow-sm q"
      fixed="top"
      style={{ height: 75 }}
    >
      <Navbar.Brand className="d-flex w-25 mx-0 p-0">
        <Link to={"/"} className=" mx-auto mb-0 align-middle">
          navbar
        </Link>
      </Navbar.Brand>

      <Form className="d-flex w-50 h-75  navbar-form justify-content-center">
        <InputGroup className="w-75">
          <Form.Control placeholder="Search" type="text" />
          <Button>Search</Button>
        </InputGroup>
      </Form>
      <div className="d-flex w-25">
        <Link to={"/products"} className="mx-auto mb-0  align-middle ">
          Products
        </Link>
        <Link to={"/contact"} className="mx-auto mb-0  align-middle ">
          Contact
        </Link>
        <Link to={"/cart"} className="mx-auto mb-0  align-middle ">
          Cart
        </Link>
      </div>
    </Navbar>
  );
};

export default TopBar;
