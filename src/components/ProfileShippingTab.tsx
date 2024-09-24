import { Button, Form } from "react-bootstrap";
import ValidateFormInput from "./ValidateFormInput";
import { IShippingDetails } from "../interfaces/ProfileInterface";

import { UpdateShippingDetails } from "../service/ProfileService";
import { zipCodeValidation } from "../utlis/InputValidation";
import { IUser } from "../interfaces/AuthenticationInterface";
import { useContext, useState } from "react";
import { UpdateAuthContext } from "../context/AuthenticationContext";
import { useError } from "./ErrorProvider";

interface Prop {
  user: IUser;
}

const ProfileShippingTab = ({ user }: Prop) => {
  const { updateUser } = useContext(UpdateAuthContext);
  const { clearErrorMessage, handleError } = useError();
  const [validated, setValidated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [zipCodeErrorMessage, setzipCodeErrorMessage] = useState("");

  const userShippingDetails: IShippingDetails = {
    firstName: user.firstName,
    lastName: user.lastName,
    city: user.city,
    address: user.address,
    zipCode: user.zipCode,
  };

  const [shippingDetails, setshippingDetails] =
    useState<IShippingDetails>(userShippingDetails);

  const { firstName, lastName, city, address, zipCode } = shippingDetails;

  function updateShippingDetails(name: string, value: string) {
    setshippingDetails({
      ...shippingDetails,
      [name]: value,
    });
  }

  let isShippingDetails = true;
  Object.values(userShippingDetails).forEach((value, index) => {
    if (value !== Object.values(shippingDetails)[index]) {
      isShippingDetails = false;
    }
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    const form = e.currentTarget;
    const validationMessage = zipCodeValidation(zipCode);
    e.preventDefault();
    if (!validationMessage.length && form.checkValidity() === false) {
      e.stopPropagation();
      setzipCodeErrorMessage(validationMessage);
      setValidated(true);
      return;
    }

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
        setshippingDetails(shippingDetails);
        handleError(error.message, "Unable to save shipping details.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <div className="mx-3">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <ValidateFormInput
          className="input-form"
          name="firstName"
          placeholder="Enter first name"
          type="text"
          label="First name"
          value={firstName}
          invalidMessage="Enter first name"
          isLoading={isLoading}
          onChange={updateShippingDetails}
        />
        <ValidateFormInput
          className="input-form"
          name="lastName"
          placeholder="Enter last name"
          type="text"
          label="Last name"
          value={lastName}
          invalidMessage="Enter last name"
          isLoading={isLoading}
          onChange={updateShippingDetails}
        />
        <ValidateFormInput
          className="input-form"
          name="city"
          placeholder="Enter city."
          type="text"
          label="City"
          value={city}
          invalidMessage="Enter city"
          isLoading={isLoading}
          onChange={updateShippingDetails}
        />
        <ValidateFormInput
          className="input-form"
          name="zipCode"
          placeholder="Enter zip code."
          type="text"
          label="Zip code"
          value={zipCode}
          invalidMessage={
            zipCodeErrorMessage.length ? "Enter zip code" : "Invalid zip code"
          }
          isInvalid={!zipCodeErrorMessage.length && validated}
          isLoading={isLoading}
          onChange={updateShippingDetails}
        />
        <ValidateFormInput
          className="input-form"
          name="address"
          placeholder="Enter address."
          type="text"
          label="Address"
          value={address}
          invalidMessage="Enter address"
          isLoading={isLoading}
          onChange={updateShippingDetails}
        />

        <div className="d-flex justify-content-end">
          <Button
            variant="primary"
            type="submit"
            disabled={isLoading || isShippingDetails}
          >
            {isLoading ? "Loading..." : "Save"}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default ProfileShippingTab;
