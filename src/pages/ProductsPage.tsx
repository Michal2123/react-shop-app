import ProductList from "../components/ProductList";
import ProductInterface from "../interfaces/ProductInterface";

interface Prop {
  productList: ProductInterface[];
}

const ProductsPage = ({ productList }: Prop) => {
  return <ProductList productList={productList} />;
};

export default ProductsPage;
