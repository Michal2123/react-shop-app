import { useContext, useEffect } from "react";
import {
  UpdateProductContext,
  ProductContext,
} from "../context/ProductContext";
import Products from "../components/product/Products";

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
