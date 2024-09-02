import ProductInterface from "../interfaces/Product";
import Product from "./Product";

interface Prop {
  productList: ProductInterface[];
}

const ProductList = ({ productList }: Prop) => {
  return (
    <>
      <ul className="list-group list-group-horizontal">
        {productList.map((product) => (
          <li key={product.id} className="list-group-item">
            <Product product={product} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductList;
