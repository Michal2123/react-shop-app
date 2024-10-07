import { useContext } from "react";
import { IShippingDetails } from "../../interfaces/ProfileInterface";
import { ThemeContext } from "../../context/ThemeContext";
import ShippingDetailForm from "../utlis/ShippingDetailForm";

interface Prop {
  updateShippingDetails: (arg: IShippingDetails) => void;
  setStep: (arg: number) => void;
}

const CartShippingForm = ({ updateShippingDetails, setStep }: Prop) => {
  const { isDark } = useContext(ThemeContext);

  function handleSubmit(shippingDetails: IShippingDetails) {
    updateShippingDetails(shippingDetails);
    setStep(3);
  }

  return (
    <div
      className={`card p-3 my-5 mx-auto`}
      data-bs-theme={isDark ? "dark" : "light"}
      style={{ maxWidth: "400px" }}
    >
      <ShippingDetailForm
        buttonText="Save Details"
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default CartShippingForm;
