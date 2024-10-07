import { IShippingDetails } from "../../interfaces/ProfileInterface";
import { UpdateShippingDetails } from "../../service/ProfileService";
import { IUser } from "../../interfaces/AuthenticationInterface";
import { useContext, useState } from "react";
import { UpdateAuthContext } from "../../context/AuthenticationContext";
import ShippingDetailForm from "../utlis/ShippingDetailForm";
import { useError } from "../providers/ErrorProvider";

interface Prop {
  user: IUser;
}

const ProfileShippingTab = ({ user }: Prop) => {
  const { updateUser } = useContext(UpdateAuthContext);
  const { clearErrorMessage, handleError } = useError();
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(shippingDetails: IShippingDetails) {
    setIsLoading(true);
    UpdateShippingDetails(shippingDetails, user.id)
      .then((response) => {
        clearErrorMessage();
        if (!response.ok) {
          throw new Error(`${response.status}`);
        }
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
