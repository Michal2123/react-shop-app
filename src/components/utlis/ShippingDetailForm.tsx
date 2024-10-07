import React, { ReactNode, useState } from "react";
import { Button, Form } from "react-bootstrap";
import ValidateFormInput from "../customes/ValidateFormInput";
import { IUser } from "../../interfaces/AuthenticationInterface";
import { IShippingDetails } from "../../interfaces/ProfileInterface";

interface Prop {
  user?: IUser;
  isLoading?: boolean;
  children?: ReactNode;
  buttonText: string;
  formInputClass?: string;
  handleSubmit: (arg: IShippingDetails) => void;
}

const shippingDetailsInit: IShippingDetails = {
  firstName: "",
  lastName: "",
  city: "",
  address: "",
  zipCode: "",
};

const ShippingDetailForm = ({
  user,
  isLoading,
  children,
  buttonText,
  formInputClass,
  handleSubmit,
}: Prop) => {
  let localShippingDetails: IShippingDetails = shippingDetailsInit;
  let disableSubmit = false;

  if (user) {
    disableSubmit = true;
    localShippingDetails = {
      ...user,
    };
  }

  const [shippingDetails, setshippingDetails] =
    useState<IShippingDetails>(localShippingDetails);

  const [validated, setValidated] = useState(false);

  const { firstName, lastName, city, address, zipCode } = shippingDetails;

  Object.values(localShippingDetails).forEach((value, index) => {
    if (value !== Object.values(shippingDetails)[index]) {
      disableSubmit = false;
    }
  });

  function updateShippingDetails(name: string, value: string) {
    setshippingDetails({
      ...shippingDetails,
      [name]: value,
    });
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    const form = e.currentTarget;
    e.stopPropagation();
    e.preventDefault();
    if (form.checkValidity() === false) {
    } else {
      handleSubmit(shippingDetails);
    }
    setValidated(true);
  }

  return (
    <Form
      className="mx-auto"
      data-testid="shipping-detail-form"
      noValidate
      validated={validated}
      onSubmit={onSubmit}
    >
      <Form.Group>
        <h4 style={{ textAlign: "center" }}>Register</h4>
      </Form.Group>
      <ValidateFormInput
        className={formInputClass}
        name="firstName"
        placeholder="Enter first name"
        type="text"
        label="First name"
        value={firstName}
        invalidMessage="Please enter first name."
        isLoading={isLoading}
        onChange={updateShippingDetails}
      />
      <ValidateFormInput
        className={formInputClass}
        name="lastName"
        placeholder="Enter last name"
        type="text"
        label="Last name"
        value={lastName}
        invalidMessage="Please enter last name."
        isLoading={isLoading}
        onChange={updateShippingDetails}
      />
      <ValidateFormInput
        className={formInputClass}
        name="city"
        placeholder="Enter city."
        type="text"
        label="City"
        value={city}
        invalidMessage="Please enter city."
        isLoading={isLoading}
        onChange={updateShippingDetails}
      />
      <ValidateFormInput
        className={formInputClass}
        name="zipCode"
        placeholder="Enter zip code."
        type="text"
        label="Zip code"
        value={zipCode}
        invalidMessage={
          !zipCode.length ? "Please enter zip code." : "Invalid zip code."
        }
        isInvalid={!/^([0-9]{2}-[0-9]{3})$/.test(zipCode) && validated}
        pattern="^([0-9]{2}-[0-9]{3})$"
        isLoading={isLoading}
        onChange={updateShippingDetails}
      />
      <ValidateFormInput
        className={formInputClass}
        name="address"
        placeholder="Enter address."
        type="text"
        label="Address"
        value={address}
        invalidMessage="Please enter address."
        isLoading={isLoading}
        onChange={updateShippingDetails}
      />

      {children}
      <div className="d-flex justify-content-center">
        <Button
          name="Register"
          variant="primary"
          type="submit"
          disabled={isLoading || disableSubmit}
        >
          {isLoading ? "Loading..." : buttonText}
        </Button>
      </div>
    </Form>
  );
};

export default ShippingDetailForm;
