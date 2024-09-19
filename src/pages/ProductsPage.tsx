import { useContext, useEffect } from "react";
import Products from "../components/Products";
import {
  FilterProductContext,
  ProductContext,
} from "../context/ProductContext";
import FilterFloatingButton from "../components/FilterFloatingButton";

const ProductsPage = () => {
  const { productList } = useContext(ProductContext);
  const { resetProductList } = useContext(FilterProductContext);
  useEffect(() => {
    return () => {
      resetProductList();
    };
  }, []);
  return (
    <>
      <Products productList={productList} />
      <FilterFloatingButton />
    </>
  );
};

export default ProductsPage;
