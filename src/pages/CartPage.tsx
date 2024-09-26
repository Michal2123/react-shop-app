import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import Cart from "../components/Cart";
import CartShippingForm from "../components/CartShippingForm";
import { IShippingDetails } from "../interfaces/ProfileInterface";
import CartOrderPreview from "../components/CartOrderPreview";
import { AuthContext } from "../context/AuthenticationContext";

function InitShippingDetails(): IShippingDetails {
  const { user } = useContext(AuthContext);
  if (user) {
    return user;
  }
  const initObj: IShippingDetails = {
    firstName: "",
    lastName: "",
    city: "",
    zipCode: "",
    address: "",
  };
  return initObj;
}

const CartPage = () => {
  const [step, setStep] = useState(1);
  const [shippingDetiles, setShippingDetiles] = useState(InitShippingDetails());
  const { cartList } = useContext(CartContext);

  function renderSteps() {
    switch (step) {
      case 1:
        return <Cart cartList={cartList} setStep={setStep} />;

      case 2:
        return (
          <CartShippingForm
            setStep={setStep}
            setShippingDetiles={setShippingDetiles}
            shippingDetails={shippingDetiles}
          />
        );

      case 3:
        return (
          <CartOrderPreview
            cartList={cartList}
            shippingDetails={shippingDetiles}
          />
        );

      default:
        return null;
    }
  }

  return (
    <>
      {cartList.length !== 0 ? (
        <>{renderSteps()}</>
      ) : (
        <h5 className="mt-5" style={{ textAlign: "center" }}>
          Cart is empty.
        </h5>
      )}
    </>
  );
};

export default CartPage;
