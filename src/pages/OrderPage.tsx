import { useContext } from "react";
import { HistoryContext } from "../context/HostoryContext";
import { useParams } from "react-router-dom";
import OrderDetails from "../components/OrderDetails";

const OrderPage = () => {
  const { history } = useContext(HistoryContext);
  const { id } = useParams();
  const order = history.find((order) => order.id === id);
  return (
    <>
      {order ? (
        <OrderDetails order={order} />
      ) : (
        <div className="mt-5">{<h1>No order found.</h1>}</div>
      )}
    </>
  );
};

export default OrderPage;
