import { IShippingDetails } from "../../interfaces/ProfileInterface";
import { IUser } from "../../interfaces/AuthenticationInterface";
import { useContext, useState } from "react";
import ShippingDetailForm from "../utlis/ShippingDetailForm";
import { useError } from "../providers/ErrorProvider";
import { UpdateAuthContext } from "../../context/AuthenticationContext";
import { UpdateShippingDetails } from "../../service/ProfileService";

interface Prop {
  user: IUser;
}

const ProfileShippingTab = ({ user }: Prop) => {
  const { clearErrorMessage, handleError } = useError();
  const [isLoading, setIsLoading] = useState(false);

  const { updateUser } = useContext(UpdateAuthContext);

  function handleSubmit(shippingDetails: IShippingDetails) {
    setIsLoading(true);
    UpdateShippingDetails(shippingDetails)
      .then((_) => {
        alert("Shipping details has been updated.");
        updateUser({
          ...user,
          ...shippingDetails,
        });
      })
      .catch((error: Error) => {
        clearErrorMessage();
        handleError(error.message, "Unable to save shipping details.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <div className="mx-3">
      <ShippingDetailForm
        title="Shipping Details"
        buttonText="Save"
        isLoading={isLoading}
        user={user}
        handleSubmit={handleSubmit}
        formInputClass="input-form"
      />
    </div>
  );
};

export default ProfileShippingTab;
