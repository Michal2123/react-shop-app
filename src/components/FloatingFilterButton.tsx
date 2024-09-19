import { Image } from "react-bootstrap";
import cartIcon from "../assets/icons/cart-icon.png";
import { useLocation } from "react-router-dom";

interface Prop {
  updatePopupState: () => void;
}

const FloatingFilterButton = ({ updatePopupState }: Prop) => {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/products" ? (
        <div className="filter-floating-button" onClick={updatePopupState}>
          <Image src={cartIcon} width={"45px"} />
        </div>
      ) : null}
    </>
  );
};

export default FloatingFilterButton;
