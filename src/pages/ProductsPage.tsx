import { useContext, useEffect } from "react";
import Products from "../components/Products";
import {
  FilterProductContext,
  ProductContext,
} from "../context/ProductContext";

const ProductsPage = () => {
  const { productList } = useContext(ProductContext);
  const { resetProductList } = useContext(FilterProductContext);
  useEffect(() => {
    return () => {
      resetProductList();
    };
  }, []);
  return <Products productList={productList} />;
};

export default ProductsPage;
