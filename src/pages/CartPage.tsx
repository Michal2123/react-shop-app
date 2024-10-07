import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

import { IShippingDetails } from "../interfaces/ProfileInterface";
import CartOrderPreview from "../components/cart/CartOrderPreview";
import { AuthContext } from "../context/AuthenticationContext";
import Cart from "../components/cart/Cart";
import CartShippingForm from "../components/cart/CartShippingForm";

function InitShippingDetails(): IShippingDetails {
  const { user } = useContext(AuthContext);
  if (user) {
    return {
      ...user,
    };
  }
  return {
    firstName: "",
    lastName: "",
    city: "",
    zipCode: "",
    address: "",
  };
}

const CartPage = () => {
  const { user } = useContext(AuthContext);
  const [step, setStep] = useState(1);
  const { cartList } = useContext(CartContext);
  const [shippingDetails, setshippingDetails] = useState<IShippingDetails>(
    InitShippingDetails()
  );

  function updateShippingDetails(details: IShippingDetails) {
    setshippingDetails({ ...details });
  }

  function renderSteps() {
    switch (step) {
      case 1:
        return <Cart cartList={cartList} setStep={setStep} />;

      case 2:
        return (
          <CartShippingForm
            setStep={setStep}
            updateShippingDetails={updateShippingDetails}
          />
        );

      case 3:
        return (
          <CartOrderPreview
            cartList={cartList}
            shippingDetails={shippingDetails}
            user={user}
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
