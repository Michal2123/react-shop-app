import { useContext } from "react";
import { IProduct } from "../../interfaces/ProductInterface";
import { Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";

interface Prop {
  searchList: IProduct[];
}

const NavbarSearchDropdown = ({ searchList }: Prop) => {
  const { isDark } = useContext(ThemeContext);
  const navigator = useNavigate();

  return (
    <>
      <div className="search-list" data-bs-theme={isDark ? "dark" : "light"}>
        {searchList
          .map((product) => (
            <div
              key={product?.id}
              className="search-list-item"
              onMouseDown={() => {
                navigator(`/products/${product.id}`);
              }}
            >
              <Image src={product?.image} fluid />
              <p>{product?.name}</p>
            </div>
          ))
          .splice(0, 5)}
      </div>
    </>
  );
};

export default NavbarSearchDropdown;
