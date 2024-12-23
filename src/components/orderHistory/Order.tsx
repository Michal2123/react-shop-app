import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IGetHistoryItem } from "../../interfaces/HistoryInterface";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";

interface Prop {
  order: IGetHistoryItem;
  isLast: boolean;
}

const Order = ({ order, isLast }: Prop) => {
  const maxVisibleProducts = 10;
  const { productList } = useContext(ProductContext);
  return (
    <>
      <div>
        {order.date}
        <br />
        {order.orderList
          .map(({ count, productId }, index) => (
            <div key={productId} className="d-inline">
              <p className="d-inline">
                {productList.find((product) => product.id === productId)?.name}{" "}
                x {count}
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
              (sumValue, order) =>
                sumValue +
                order.count *
                  (productList.find((product) => product.id === order.productId)
                    ?.price ?? 0),
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
