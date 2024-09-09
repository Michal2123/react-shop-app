import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { IProduct } from "../interfaces/ProductInterface";

interface Prop {
  product: IProduct;
  onBuyClick(product: IProduct): void;
}

const Product = ({ product, onBuyClick }: Prop) => {
  return (
    <div className="card shadow-sm mx-3 my-2">
      <div className="row g-0 align-items-center">
        <div className="col-md">
          <img
            className="img-fluid rounded-start "
            src={product.image}
            alt={product.name}
          />
        </div>
        <div className="col-md">
          <div className="card-body col">
            <h3 className="card-title">
              {product.name}, {product.id}
            </h3>
            <p className="card-text">{product.describe}</p>
            <p>Category: {product.category}</p>
            <p>Price: {product.price} PLN</p>
            <div className="d-flex justify-content-between">
              <Button onClick={() => onBuyClick(product)}>Buy</Button>
              <Link to={`${product.id}`} className="">
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
