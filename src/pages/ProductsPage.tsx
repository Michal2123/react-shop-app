import { useContext } from "react";
import ProductList from "../components/ProductList";
import { ProductContext } from "../context/ProductContext";

const ProductsPage = () => {
  const { productList } = useContext(ProductContext);
  return <ProductList productList={productList} />;
};

export default ProductsPage;
