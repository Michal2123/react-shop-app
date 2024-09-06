import { useContext } from "react";
import ProductInterface from "../interfaces/ProductInterface";
import Product from "./Product";
import { CartContext, UpdateCartContext } from "../context/CartContext";
import { CartActionKind } from "../enum/CartEnum";

interface Prop {
  productList: ProductInterface[];
}

const ProductList = ({ productList }: Prop) => {
  const { cartList } = useContext(CartContext);
  const { dispatch } = useContext(UpdateCartContext);

  function handleClickBuy(product: ProductInterface) {
    cartList.find((a) => a.product.id === product.id)
      ? dispatch({ type: CartActionKind.INCRESECOUNT, product })
      : dispatch({ type: CartActionKind.ADD, product });
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
