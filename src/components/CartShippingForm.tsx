import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import ValidateFormInput from "./ValidateFormInput";
import { zipCodeValidation } from "../utlis/InputValidation";
import { IShippingDetails } from "../interfaces/ProfileInterface";

interface Prop {
  shippingDetails: IShippingDetails;
  setShippingDetiles: (arg: IShippingDetails) => void;
  setStep: (arg: number) => void;
}

const CartShippingForm = ({
  setShippingDetiles,
  shippingDetails,
  setStep,
}: Prop) => {
  const [validated, setValidated] = useState(false);
  const [zipCodeErrorMessage, setzipCodeErrorMessage] = useState("");

  const { firstName, lastName, city, zipCode, address } = shippingDetails;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    const form = e.currentTarget;
    const validationMessage = zipCodeValidation(zipCode);
    console.log(validationMessage);
    e.preventDefault();
    if (validationMessage.length || !form.checkValidity()) {
      e.stopPropagation();
      setzipCodeErrorMessage(validationMessage);
      setValidated(true);
      return;
    }

    setStep(3);
  }

  function updateShippingDetiles(name: string, value: string) {
    if (name === "zipCode") {
      setzipCodeErrorMessage("");
    }
    setShippingDetiles({
      ...shippingDetails,
      [name]: value,
    });
  }

  return (
    <div className="card p-3 my-5 mx-auto" style={{ maxWidth: "400px" }}>
      <Form
        className="mx-auto"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <Form.Group className="mb-3">
          <h4 style={{ textAlign: "center" }}>Shipping details</h4>
        </Form.Group>
        <ValidateFormInput
          name="firstName"
          placeholder="Enter first name"
          type="text"
          label="First name"
          value={firstName}
          invalidMessage="Enter first name"
          onChange={updateShippingDetiles}
        />
        <ValidateFormInput
          name="lastName"
          placeholder="Enter last name"
          type="text"
          label="Last name"
          value={lastName}
          invalidMessage="Enter last name"
          onChange={updateShippingDetiles}
        />
        <ValidateFormInput
          name="city"
          placeholder="Enter city."
          type="text"
          label="City"
          value={city}
          invalidMessage="Enter city"
          onChange={updateShippingDetiles}
        />
        <ValidateFormInput
          name="zipCode"
          placeholder="Enter zip code."
          type="text"
          label="Zip code"
          value={zipCode}
          invalidMessage={
            zipCodeErrorMessage.length > 0
              ? "Invalid zip code"
              : "Enter zip code"
          }
          isInvalid={zipCodeErrorMessage.length > 0}
          onChange={updateShippingDetiles}
        />
        <ValidateFormInput
          name="address"
          placeholder="Enter address."
          type="text"
          label="Address"
          value={address}
          invalidMessage="Enter address"
          onChange={updateShippingDetiles}
        />

        <div className="d-flex justify-content-center mt-3">
          <Button variant="primary" type="submit">
            Save details
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default CartShippingForm;
