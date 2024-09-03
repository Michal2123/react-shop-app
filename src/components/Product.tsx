import { Link } from "react-router-dom";
import ProductInterface from "../interfaces/ProductInterface";

interface Props {
  product: ProductInterface;
}

const Product = ({ product }: Props) => {
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
            <p>Price: {product.price} PLN</p>
            <div className="d-flex justify-content-between">
              <button className="btn btn-primary" onClick={() => {}}>
                Buy
              </button>
              <Link to={`${product.id}`} className="">
                <button className="btn btn-secondary">Details</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
