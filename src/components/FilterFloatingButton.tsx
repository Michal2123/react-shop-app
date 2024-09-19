import { Image } from "react-bootstrap";
import cartIcon from "../assets/icons/cart-icon.png";
import { useLocation } from "react-router-dom";
const FilterFloatingButton = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/products" ? (
        <div className="filter-floating-button">
          <Image src={cartIcon} width={"45px"} />
        </div>
      ) : null}
    </>
  );
};

export default FilterFloatingButton;
