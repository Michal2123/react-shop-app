import { useContext } from "react";
import ProductInterface from "../interfaces/ProductInterface";
import Product from "./Product";
import { cartContext } from "../layouts/MainLayout";

interface Prop {
  productList: ProductInterface[];
}

const ProductList = ({ productList }: Prop) => {
  const { cartList, updateCartList } = useContext(cartContext);
  function handleClickBuy(product: ProductInterface) {
    cartList.find((a) => a.product.id === product.id)
      ? updateCartList((draft) => {
          const item = draft.find((a) => a.product.id === product.id);
          item && item.count++;
        })
      : updateCartList((draft) => {
          draft.push({
            product,
            count: 1,
          });
        });
  }

  return (
    <>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 m-0">
        {productList.map((product) => (
          <div key={product.id} className="col p-0">
            <Product product={product} onBuyClick={handleClickBuy} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
