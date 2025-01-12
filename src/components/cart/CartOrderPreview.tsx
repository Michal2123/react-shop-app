import { useContext, useState } from "react";
import { ICartItem } from "../../interfaces/CartInteraface";
import { IShippingDetails } from "../../interfaces/ProfileInterface";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { UpdateCartContext } from "../../context/CartContext";
import { CartActionKind } from "../../enum/CartEnum";
import { IUser } from "../../interfaces/AuthenticationInterface";
import { IOrderItem } from "../../interfaces/HistoryInterface";
import { PostOrderToHistory } from "../../service/HistoryService";
import { GetDateString } from "../../utlis/Date";

interface Prop {
  cartList: ICartItem[];
  user?: IUser;
  shippingDetails: IShippingDetails;
}

const CartOrderPreview = ({ cartList, shippingDetails, user }: Prop) => {
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useContext(UpdateCartContext);

  const { firstName, lastName, city, zipCode, address } = shippingDetails;

  const navigator = useNavigate();

  function handleSubmit() {
    if (!user) {
      onSuccess();
      return;
    }
    setIsLoading(true);
    const orderList = cartList.map(({ product, count }) => {
      const temp: IOrderItem = {
        productId: product.id,
        count: count,
      };
      return temp;
    });
    PostOrderToHistory({
      date: GetDateString(),
      orderList,
    })
      .then((_) => {
        onSuccess();
      })
      .catch((error) => {
        throw error;
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function onSuccess() {
    alert(
      `Thank you for choosing Green Farm.\nOrder will be send as soon as posible.`
    );
    dispatch({ type: CartActionKind.CLEARCART });
    navigator("/");
  }

  return (
    <div className="mt-4 mb-2 mx-auto" style={{ maxWidth: "800px" }}>
      <div className="row">
        <div className="col-12 col-md-6">
          <br />
          <ul>
            {cartList.map(({ count, product }) => (
              <li key={product.id} className="row my-2">
                <div className="col-12 col-sm-6">
                  <div className="row">
                    <div className="col-6">
                      <h5>{product.name}</h5>
                    </div>
                    <div className="col-6 text-sm-start text-end pe-5 pe-sm-0">
                      <p>x {count}</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 text-end pe-4">
                  <p>{product.price * count} $</p>
                </div>
              </li>
            ))}
          </ul>
          <h2
            className="pe-3 pe-md-0"
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
        <div className="col-12 col-md-6 ps-5 ps-md-3">
          <div className="w-50 mx-md-auto pt-4">
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
