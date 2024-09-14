import { useContext, useEffect, useState } from "react";
import { IGetHistoryItem } from "../interfaces/HistoryInterface";
import { GetOrderHistory } from "../service/HistoryService";
import { AuthContext } from "../context/AuthenticationContext";

function getInitialHistoryState() {
  const json = localStorage.getItem("history");
  return json !== null ? (JSON.parse(json) as IGetHistoryItem[]) : [];
}

const OrderHistory = () => {
  const [history, setHistory] = useState<IGetHistoryItem[]>(
    getInitialHistoryState()
  );
  const { user } = useContext(AuthContext);
  useEffect(() => {
    let didFetch = false;
    if (!history.length && user) {
      GetOrderHistory(user.id)
        .then((data) => {
          if (!didFetch) {
            localStorage.setItem("history", JSON.stringify(data));
            setHistory(data);
          }
        })
        .catch((error: Error) => console.log(error));
    }
    return () => {
      didFetch = true;
    };
  }, []);
  if (history.length) {
    return (
      <div className="d-flex justify-content-center my-5">
        <div className="card p-4 w-75">
          {history.map((item, index) => (
            <div key={item.id}>
              <div>
                {item.date}
                <ul className="mt-3">
                  {item.orderList.map(({ name, count, price, productId }) => (
                    <li key={productId} className="ms-4">
                      <div className="d-inline resp-margin-right">
                        <h5 className="d-inline">{name}</h5>
                        <p className="d-inline"> x {count}</p>
                      </div>
                      <h6 className="d-inline m-0 pt-1">{price * count}$</h6>
                    </li>
                  ))}
                </ul>
                <h2
                  style={{
                    textAlign: "end",
                  }}
                >
                  Total:{" "}
                  {item.orderList.reduce(
                    (sumValue, item) => sumValue + item.count * item.price,
                    0
                  )}{" "}
                  $
                </h2>
              </div>
              {index !== history.length - 1 ? <hr className="my-3" /> : null}
            </div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="d-flex justify-content-center mt-5">
      <h5>There were no order yet.</h5>
    </div>
  );
};

export default OrderHistory;
