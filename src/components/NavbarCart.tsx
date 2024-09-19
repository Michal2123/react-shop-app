import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Image } from "react-bootstrap";
import cartIcon from "../assets/icons/cart-icon.png";
import { CartContext } from "../context/CartContext";

const NavbarCart = () => {
  const { cartList } = useContext(CartContext);
  const cartCount = cartList.reduce((partialSum, a) => partialSum + a.count, 0);
  return (
    <NavLink
      to={"/cart"}
      className={({ isActive }) =>
        `${cartCount > 0 && "position-relative"} icon-nav  ${
          isActive && "icon-nav-active-page"
        } p-0 pt-1 my-2 my-md-0  mx-3`
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
  );
};

export default NavbarCart;
