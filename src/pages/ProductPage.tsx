import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import ProductDetail from "../components/product/ProductDetail";

const ProductPage = () => {
  const { productList } = useContext(ProductContext);
  const { id } = useParams();

  const product = productList.find((product) => product.id === id);

  return (
    <div className="d-flex justify-content-center">
      {product ? (
        <ProductDetail product={product} />
      ) : (
        <div className="mt-5">{<h1>No product found.</h1>}</div>
      )}
    </div>
  );
};

export default ProductPage;
