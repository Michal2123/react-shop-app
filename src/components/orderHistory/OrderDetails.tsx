import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { IGetHistoryItem } from "../../interfaces/HistoryInterface";
import { IProduct } from "../../interfaces/ProductInterface";
interface Prop {
  order: IGetHistoryItem;
  productList: IProduct[];
}

const OrderDetails = ({ order, productList }: Prop) => {
  const { isDark } = useContext(ThemeContext);
  return (
    <>
      <div className="mt-4 mb-2 px-3 mx-auto" style={{ maxWidth: "500px" }}>
        <div
          className={`card p-4 w-100`}
          data-bs-theme={isDark ? "dark" : "light"}
        >
          <h2>{order.date}</h2>
          <br />
          <ul>
            {order.orderList.map(({ count, productId }) => (
              <li key={productId} className="d-inline">
                <div className="my-2">
                  <div className="d-inline resp-margin-right">
                    <h5 className="d-inline">
                      {
                        productList.find((product) => product.id === productId)
                          ?.name
                      }
                    </h5>
                    <p className="d-inline"> x {count}</p>
                  </div>

                  <p className="d-inline">
                    {productList.find((product) => product.id === productId)
                      ?.price ?? 0 * count}{" "}
                    $
                  </p>
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
              (sumValue, item) =>
                sumValue +
                item.count *
                  (productList.find((product) => product.id === item.productId)
                    ?.price ?? 0),
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
