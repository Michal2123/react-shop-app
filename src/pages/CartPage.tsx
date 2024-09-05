import { useContext } from "react";
import CartItem from "../components/CartItem";
import { Button } from "react-bootstrap";
import { cartContext } from "../layouts/MainLayout";

const CartPage = () => {
  const { cartList, updateCartList } = useContext(cartContext);

  return (
    <>
      {cartList.length !== 0 ? (
        <div className="card w-50 mx-auto my-5">
          <div className="card-body row row-col-2 row-col-md-2 row-col-lg-3">
            {cartList.map(({ product, count }) => (
              <CartItem
                key={product.id}
                product={product}
                count={count}
                updateCartList={updateCartList}
              />
            ))}
            <h5 style={{ textAlign: "end" }}>Price: 555$</h5>
            <Button
              className="mx-auto"
              style={{ maxWidth: "300px", marginTop: "50px" }}
            >
              Order
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
