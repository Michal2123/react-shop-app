import ProductInterface from "../interfaces/Product";

interface Props {
  product: ProductInterface;
}

const Product = ({ product }: Props) => {
  return (
    <div className="Product">
      <div className="ProductDesc">
        <h3>{product.name}</h3>
        <p>Price: {product.price} PLN</p>

        <p>Count: 1</p>
        <button onClick={() => {}}>Add</button>

        <button onClick={() => {}}>button</button>
      </div>
      <div className="ProductImg">
        <img
          style={{ height: 75, width: 75 }}
          src={product.image}
          alt={product.name}
        />
      </div>
    </div>
  );
};

export default Product;
