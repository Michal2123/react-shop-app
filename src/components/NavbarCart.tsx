import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Image } from "react-bootstrap";
import cartIcon from "../assets/icons/cart-icon.png";
import { CartContext } from "../context/CartContext";
import { ThemeContext } from "../context/ThemeContext";

const NavbarCart = () => {
  const { isDark } = useContext(ThemeContext);
  const { cartList } = useContext(CartContext);
  const cartCount = cartList.reduce((partialSum, a) => partialSum + a.count, 0);
  return (
    <NavLink to={"/cart"}>
      {({ isActive }) => {
        return (
          <>
            <div
              className={`${
                cartCount > 0 && "position-relative"
              } p-0 pt-1 my-2 my-md-0  mx-3`}
              style={{ maxWidth: "35px" }}
            >
              <Image
                className={`icon-nav ${isActive && "page"}`}
                data-bs-theme={isDark ? "dark" : "light"}
                src={cartIcon}
                fluid
                style={{ minWidth: "30px" }}
              />
              {cartCount > 0 && (
                <div className=" cart-count-nav">
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
            </div>
          </>
        );
      }}
    </NavLink>
  );
};

export default NavbarCart;
