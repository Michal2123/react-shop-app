import ProductInterface from "../interfaces/ProductInterface";

interface Props {
  product: ProductInterface;
}

const Product = ({ product }: Props) => {
  return (
    <div className="card mx-3 my-2">
      <img
        className="card-img-top"
        style={{ height: 75, width: 75 }}
        src={product.image}
        alt={product.name}
      />
      <div className="card-body">
        <h3 className="card-title">{product.name}</h3>
        <p className="card-text">{product.describe}</p>
        <p>Price: {product.price} PLN</p>
        <button className="btn btn-primary" onClick={() => {}}>
          Buy
        </button>
      </div>
    </div>
  );
};

export default Product;
