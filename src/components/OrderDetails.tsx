import { useContext } from "react";
import { IGetHistoryItem } from "../interfaces/HistoryInterface";
import { ThemeContext } from "../context/ThemeContext";

interface Prop {
  order: IGetHistoryItem;
}

const OrderDetails = ({ order }: Prop) => {
  const { isDark } = useContext(ThemeContext);
  return (
    <>
      <div className="mt-4 mb-2 px-3 mx-auto" style={{ maxWidth: "500px" }}>
        <div className={`card ${isDark ? "dark" : "light"} p-4 w-100`}>
          <h2>{order.date}</h2>
          <br />
          <ul>
            {order.orderList.map(({ name, count, productId, price }) => (
              <li key={productId} className="d-inline">
                <div className="my-2">
                  <div className="d-inline resp-margin-right">
                    <h5 className="d-inline">{name}</h5>
                    <p className="d-inline"> x {count}</p>
                  </div>

                  <p className="d-inline">{price * count} $</p>
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
            {order.orderList.reduce(
              (sumValue, item) => sumValue + item.count * item.price,
              0
            )}{" "}
            $
          </h2>
        </div>
      </div>
    </>
  );
};

export default OrderDetails;
