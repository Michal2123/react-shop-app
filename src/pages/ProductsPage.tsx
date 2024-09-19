import { useContext, useEffect } from "react";
import Products from "../components/Products";
import {
  UpdateProductContext,
  ProductContext,
} from "../context/ProductContext";

const ProductsPage = () => {
  const { productList } = useContext(ProductContext);
  const { resetProductList } = useContext(UpdateProductContext);
  useEffect(() => {
    return () => {
      resetProductList();
    };
  }, []);
  return (
    <>
      <Products productList={productList} />
    </>
  );
};

export default ProductsPage;
