import ProductInterface from "../interfaces/ProductInterface";
import Product from "./Product";

interface Prop {
  productList: ProductInterface[];
}

const ProductList = ({ productList }: Prop) => {
  return (
    <>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 m-0">
        {productList.map((product) => (
          <div key={product.id} className="col p-0">
            <Product product={product} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
