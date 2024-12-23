import { useContext } from "react";
import { HistoryContext } from "../context/HostoryContext";
import { useParams } from "react-router-dom";
import OrderDetails from "../components/orderHistory/OrderDetails";
import { ProductContext } from "../context/ProductContext";

const OrderPage = () => {
  const { history } = useContext(HistoryContext);
  const { productList } = useContext(ProductContext);
  const { id } = useParams();
  const order = history.find((order) => order.id == id);
  return (
    <>
      {order ? (
        <OrderDetails order={order} productList={productList} />
      ) : (
        <div className="mt-5">{<h1>No order found.</h1>}</div>
      )}
    </>
  );
};

export default OrderPage;
