import { useParams } from "react-router-dom";
import ProductDetail from "../components/ProductDetail";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const ProductPage = () => {
  const { productList } = useContext(ProductContext);
  const { id } = useParams();
  const productId = Number(id);
  const product = productList.find((product) => product.id === productId);
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
