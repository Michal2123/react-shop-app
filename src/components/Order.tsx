import { Button } from "react-bootstrap";
import { IGetHistoryItem } from "../interfaces/HistoryInterface";
import { Link } from "react-router-dom";

interface Prop {
  order: IGetHistoryItem;
  isLast: boolean;
}

const Order = ({ order, isLast }: Prop) => {
  const maxVisibleProducts = 10;
  return (
    <>
      <div>
        {order.date}
        <br />
        {order.orderList
          .map(({ name, count, productId }, index) => (
            <div key={productId} className="d-inline">
              <p className="d-inline">
                {name} x {count}
                {index < maxVisibleProducts - 1 &&
                index !== order.orderList.length - 1
                  ? ", "
                  : null}
              </p>
            </div>
          ))
          .slice(0, maxVisibleProducts)}
        {order.orderList.length > maxVisibleProducts ? "..." : null}
        <div className="d-flex justify-content-between my-3">
          <Link to={`${order.id}`}>
            <Button className="btn-secondary">Details</Button>
          </Link>

          <h2
            className="d-inline m-0 pt-1"
            style={{
              textAlign: "end",
            }}
          >
            Total:{" "}
            {order.orderList.reduce(
              (sumValue, order) => sumValue + order.count * order.price,
              0
            )}{" "}
            $
          </h2>
        </div>
      </div>
      {isLast ? <hr className="mt-3" /> : null}
    </>
  );
};

export default Order;
