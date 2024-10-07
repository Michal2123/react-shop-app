import { useImmerReducer } from "use-immer";
import { ICartAction, ICartItem } from "../../interfaces/CartInteraface";
import useCartReducer from "../../hooks/useCartReducer";
import { CartContext, UpdateCartContext } from "../../context/CartContext";

function getInitialCartState() {
  const json = localStorage.getItem("cartList");
  return json !== null ? (JSON.parse(json) as ICartItem[]) : [];
}

const CartProvider = ({ children }: any) => {
  const [cartList, dispatch] = useImmerReducer<ICartItem[], ICartAction>(
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
