import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import ProductBuyButton from "./ProductBuyButton";
import { useContext } from "react";
import { IProduct } from "../../interfaces/ProductInterface";
import { ThemeContext } from "../../context/ThemeContext";

interface Prop {
  product: IProduct;
}

const Product = ({ product }: Prop) => {
  const { isDark } = useContext(ThemeContext);
  return (
    <div
      className={`card shadow-sm mx-3 my-2`}
      data-bs-theme={isDark ? "dark" : "light"}
    >
      <div className="row g-0 align-items-center">
        <div className="col">
          <img
            className="img-fluid rounded-start "
            src={product.image}
            alt={product.name}
          />
        </div>
        <div className="col">
          <div className="card-body col">
            <h3 className="card-title">
              {product.name}, {product.id}
            </h3>
            <p className="card-text">{product.describe}</p>
            <p>Category: {product.category}</p>
            <p>Price: {product.price} PLN</p>
            <div className="d-flex justify-content-between">
              <ProductBuyButton product={product} />
              <Link to={`${product.id}`}>
                <Button className="btn btn-secondary">Details</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
