import { Link, NavLink } from "react-router-dom";
import { Navbar, Form, InputGroup, Button, Image } from "react-bootstrap";
import logo from "../assets/images/logo.png";
import cartIcon from "../assets/icons/cart-icon.png";
import userIcon from "../assets/icons/user-icon.png";
import searchBtnIcon from "../assets/icons/search-btn-icon.png";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthenticationContext";
import CustomeDropdown from "./CustomeDropdown";

const NavigationBar = () => {
  const { user } = useContext(AuthContext);
  const { cartList } = useContext(CartContext);
  const cartCount = cartList.reduce((partialSum, a) => partialSum + a.count, 0);

  return (
    <Navbar
      className="justify-content-between shadow-sm q"
      fixed="top"
      style={{ height: 75 }}
    >
      <Navbar.Brand className="d-flex w-25 mx-0 p-0">
        <Link to={"/"} className=" mx-auto mb-0 align-middle">
          <Image src={logo} style={{ height: "60px" }} />
        </Link>
      </Navbar.Brand>

      <Form className="d-flex w-50 h-75  navbar-form justify-content-center">
        <InputGroup className="w-75">
          <Form.Control
            name="Seatch Input"
            placeholder="Search"
            type="text"
            className="shadow-none rounded-0 input-nav-search"
          />
          <Button className="rounded-0 btn-nav-search ">
            <Image src={searchBtnIcon} fluid style={{ width: "25px" }} />
          </Button>
        </InputGroup>
      </Form>
      <div className="d-flex justify-content-end w-25 h-75 me-4">
        <NavLink to={"/products"}>
          {({ isActive }) => (
            <Button
              className={`link-nav ${isActive && "link-nav-active-page"} `}
            >
              Product
            </Button>
          )}
        </NavLink>
        <NavLink
          to={"/cart"}
          className={({ isActive }) =>
            `${cartCount > 0 && "position-relative"} icon-nav  ${
              isActive && "icon-nav-active-page"
            } mx-3 p-0 pt-1`
          }
        >
          <Image src={cartIcon} fluid style={{ minWidth: "30px" }} />
          {cartCount > 0 && (
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
          )}
        </NavLink>
        {user ? (
          <div className={` icon-nav  mx-3 p-0 pt-1`}>
            <CustomeDropdown>
              <Image src={userIcon} fluid style={{ minWidth: "30px" }} />
            </CustomeDropdown>
          </div>
        ) : (
          <NavLink
            to={"/signin"}
            className={({ isActive }) =>
              `link-nav ${isActive && "link-nav-active-page"}`
            }
          >
            Sing in
          </NavLink>
        )}
      </div>
    </Navbar>
  );
};

export default NavigationBar;
