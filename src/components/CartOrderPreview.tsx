import { useContext, useState } from "react";
import { ICartItem } from "../interfaces/CartInteraface";
import { IShippingDetails } from "../interfaces/ProfileInterface";
import { Button } from "react-bootstrap";
import { AuthContext } from "../context/AuthenticationContext";
import { PostOrderToHistory } from "../service/HistoryService";
import { IGetHistoryItem, IOrderItem } from "../interfaces/HistoryInterface";
import {
  HistoryContext,
  UpdateHistoryContext,
} from "../context/HostoryContext";
import { useNavigate } from "react-router-dom";
import { UpdateCartContext } from "../context/CartContext";
import { CartActionKind } from "../enum/CartEnum";
import { GetDateString } from "../utlis/Date";

interface Prop {
  cartList: ICartItem[];
  shippingDetails: IShippingDetails;
}

const CartOrderPreview = ({ cartList, shippingDetails }: Prop) => {
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useContext(AuthContext);
  const { history } = useContext(HistoryContext);
  const { updateHistory } = useContext(UpdateHistoryContext);
  const { dispatch } = useContext(UpdateCartContext);

  const { firstName, lastName, city, zipCode, address } = shippingDetails;

  const navigator = useNavigate();

  function handleSubmit() {
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
        date: GetDateString(),
        orderList,
      })
        .then((response) => response.json())
        .then((data: IGetHistoryItem) => {
          updateHistory([...history, data]);
          onSuccess();
        })
        .catch((error: Error) => {
          console.log(error);
          return;
        })
        .finally(() => {
          setIsLoading(false);
        });
      return;
    }
    onSuccess();
  }

  function onSuccess() {
    alert(
      `Thank you for choosing Green Farm.\nOrder will be send as soon as posible.`
    );
    dispatch({ type: CartActionKind.CLEARCART, product: undefined });
    navigator("/");
  }

  return (
    <div className="mt-4 mb-2 mx-auto" style={{ maxWidth: "800px" }}>
      <div className="w-100 row row-cols-1 row-cols-sm-2">
        <div className="col">
          <br />
          <ul>
            {cartList.map(({ count, product }) => (
              <li key={product.id} className="d-inline">
                <div className="my-2">
                  <div className="d-inline resp-margin-right">
                    <h5 className="d-inline">{product.name}</h5>
                    <p className="d-inline"> x {count}</p>
                  </div>

                  <p className="d-inline">{product.price * count} $</p>
                </div>
              </li>
            ))}
          </ul>
          <h2
            style={{
              textAlign: "end",
            }}
          >
            Total:{" "}
            {cartList.reduce(
              (sumValue, item) => sumValue + item.count * item.product.price,
              0
            )}{" "}
            $
          </h2>
        </div>
        <div className="d-flex flex-column justify-content-center col ps-3">
          <div className="w-50 mx-auto pt-4">
            <h5>First name</h5>
            <p>{firstName}</p>
            <h5>Last name</h5>
            <p>{lastName}</p>
            <h5>City</h5>
            <p>{city}</p>
            <h5>Zip code</h5>
            <p>{zipCode}</p>
            <h5>Address</h5>
            <p>{address}</p>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-end mt-3 pe-4">
        <Button variant="primary" type="submit" onClick={() => handleSubmit()}>
          {isLoading ? "...Loading" : "Buy"}
        </Button>
      </div>
    </div>
  );
};

export default CartOrderPreview;
