import { useImmerReducer } from "use-immer";
import { CartContext, UpdateCartContext } from "../context/CartContext";
import useCartReducer from "../hooks/useCartReducer";
import { ICartAction, ICartList } from "../interfaces/CartInteraface";

function getInitialCartState() {
  const json = localStorage.getItem("cartList");
  return json !== null ? (JSON.parse(json) as ICartList[]) : [];
}

const CartProvider = ({ children }: any) => {
  const [cartList, dispatch] = useImmerReducer<ICartList[], ICartAction>(
    useCartReducer,
    getInitialCartState()
  );

  localStorage.setItem("cartList", JSON.stringify(cartList));

  return (
    <CartContext.Provider value={{ cartList }}>
      <UpdateCartContext.Provider value={{ dispatch }}>
        {children}
      </UpdateCartContext.Provider>
    </CartContext.Provider>
  );
};

export default CartProvider;
