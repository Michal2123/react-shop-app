import { useContext, useState } from "react";
import CartItem from "../components/CartItem";
import { Button } from "react-bootstrap";
import { CartContext, UpdateCartContext } from "../context/CartContext";
import { PostOrderToHistory } from "../service/HistoryService";
import { AuthContext } from "../context/AuthenticationContext";
import { useNavigate } from "react-router-dom";
import { CartActionKind } from "../enum/CartEnum";
import { IGetHistoryItem, IOrderItem } from "../interfaces/HistoryInterface";
import {
  HistoryContext,
  UpdateHistoryContext,
} from "../context/HostoryContext";

const CartPage = () => {
  const { cartList } = useContext(CartContext);
  const { dispatch } = useContext(UpdateCartContext);
  const { user } = useContext(AuthContext);
  const { history } = useContext(HistoryContext);
  const { updateHistory } = useContext(UpdateHistoryContext);
  const [isLoading, setIsLoading] = useState(false);

  const navigator = useNavigate();

  const totalPrice = cartList.reduce(
    (sumValue, item) => sumValue + item.count * item.product.price,
    0
  );

  function handleClickOrder() {
    const today = new Date();
    const orderList = cartList.map(({ product, count }) => {
      const temp: IOrderItem = {
        productId: String(product.id),
        name: product.name,
        price: product.price,
        count: count,
      };
      return temp;
    });
    if (user) {
      setIsLoading(true);
      PostOrderToHistory({
        userId: user.id,
        date: `${today.getDay()}/${today.getMonth()}/${today.getFullYear()} ${today.getHours()}:${today.getMinutes()}`,
        orderList,
      })
        .then((response) => response.json())
        .then((data: IGetHistoryItem) => {
          updateHistory([...history, data]);
        })
        .catch((error: Error) => {
          console.log(error);
          return;
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
    alert("Products will be send shortly.");
    dispatch({
      type: CartActionKind.CLEARCART,
      product: undefined,
    });
    navigator("/");
  }

  return (
    <>
      {cartList.length !== 0 ? (
        <div className="card w-50 mx-auto my-5">
          <div className="card-body row row-col-2 row-col-md-2 row-col-lg-3">
            {cartList.map(({ product, count }) => (
              <CartItem key={product.id} product={product} count={count} />
            ))}
            <h5 style={{ textAlign: "end" }}>Price: {totalPrice}$</h5>
            <Button
              className="mx-auto"
              style={{ maxWidth: "300px", marginTop: "50px" }}
              onClick={handleClickOrder}
            >
              {isLoading ? "Loading..." : "Order"}
            </Button>
          </div>
        </div>
      ) : (
        <h5 className="mt-5" style={{ textAlign: "center" }}>
          Cart is empty.
        </h5>
      )}
    </>
  );
};

export default CartPage;
