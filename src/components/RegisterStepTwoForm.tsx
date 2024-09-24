import { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import ValidateFormInput from "./ValidateFormInput";
import { NavLink, useNavigate } from "react-router-dom";
import { UpdateAuthContext } from "../context/AuthenticationContext";
import { Register } from "../service/RegisterService";
import { IRegisterData } from "../interfaces/RegisterInterface";
import { zipCodeValidation } from "../utlis/InputValidation";
import { useError } from "./ErrorProvider";

interface Prop {
  registerData: IRegisterData;
  updateRegisterData: (name: string, value: string) => void;
}

const RegisterStepTwoForm = ({ registerData, updateRegisterData }: Prop) => {
  const { logIn } = useContext(UpdateAuthContext);
  const { clearErrorMessage, handleError } = useError();
  const [validated, setValidated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [zipCodeErrorMessage, setzipCodeErrorMessage] = useState("");
  const { firstName, lastName, city, zipCode, address } = registerData;
  const navigate = useNavigate();

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
    Register(registerData)
      .then((data) => {
        clearErrorMessage();
        logIn(data);
        navigate("/");
      })
      .catch((error: Error) => {
        handleError(error.message, "Unable to register.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <div className="card p-3 my-2 ">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group>
          <h4 style={{ textAlign: "center" }}>Register</h4>
        </Form.Group>
        <ValidateFormInput
          name="firstName"
          placeholder="Enter first name"
          type="text"
          label="First name"
          value={firstName}
          invalidMessage="Enter first name"
          isLoading={isLoading}
          onChange={updateRegisterData}
        />
        <ValidateFormInput
          name="lastName"
          placeholder="Enter last name"
          type="text"
          label="Last name"
          value={lastName}
          invalidMessage="Enter last name"
          isLoading={isLoading}
          onChange={updateRegisterData}
        />
        <ValidateFormInput
          name="city"
          placeholder="Enter city."
          type="text"
          label="City"
          value={city}
          invalidMessage="Enter city"
          isLoading={isLoading}
          onChange={updateRegisterData}
        />
        <ValidateFormInput
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
          onChange={updateRegisterData}
        />
        <ValidateFormInput
          name="address"
          placeholder="Enter address."
          type="text"
          label="Address"
          value={address}
          invalidMessage="Enter address"
          isLoading={isLoading}
          onChange={updateRegisterData}
        />

        <Form.Group className="mb-3">
          <Form.Text>
            Already have account?
            <NavLink
              style={{ color: "blue", cursor: "pointer" }}
              to={"/signin"}
            >
              {" "}
              Sign in
            </NavLink>
          </Form.Text>
        </Form.Group>
        <div className="d-flex justify-content-center">
          <Button variant="primary" type="submit" disabled={isLoading}>
            {isLoading ? "Loading..." : "Register"}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default RegisterStepTwoForm;
