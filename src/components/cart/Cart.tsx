import { useContext } from "react";
import { Button } from "react-bootstrap";
import { AuthContext } from "../../context/AuthenticationContext";
import { ThemeContext } from "../../context/ThemeContext";
import { ICartItem } from "../../interfaces/CartInteraface";
import CartItem from "./CartItem";

interface Prop {
  cartList: ICartItem[];
  setStep: (arg: number) => void;
}

const Cart = ({ cartList, setStep }: Prop) => {
  const { user } = useContext(AuthContext);
  const { isDark } = useContext(ThemeContext);

  const totalPrice = cartList.reduce(
    (sumValue, item) => sumValue + item.count * item.product.price,
    0
  );

  function handleClickOrder() {
    if (user) {
      setStep(3);
      return;
    }
    setStep(2);
  }

  return (
    <div
      className={`card w-50 mx-auto my-5`}
      data-bs-theme={isDark ? "dark" : "light"}
    >
      <div className="card-body row row-col-2 row-col-md-2 row-col-lg-3">
        {cartList.map(({ product, count }) => (
          <CartItem key={product.id} product={product} count={count} />
        ))}
        <h5 style={{ textAlign: "end" }}>Price: {totalPrice}$</h5>
        <Button
          className="mx-auto"
          style={{ maxWidth: "300px", marginTop: "50px" }}
          onClick={handleClickOrder}
        >
          {user ? "Finalize order" : "Go to shipping details"}
        </Button>
      </div>
    </div>
  );
};

export default Cart;
