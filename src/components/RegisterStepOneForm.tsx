import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import ValidateFormInput from "./ValidateFormInput";
import { RegisterData } from "./Register";

interface Prop {
  registerData: RegisterData;
  updateRegisterData: (name: string, value: string) => void;
  handleNextStep: () => void;
}

const RegisterStepOneForm = ({
  registerData,
  handleNextStep,
  updateRegisterData,
}: Prop) => {
  const [repeatPassword, setRepeatPassword] = useState("");
  const [validated, setValidated] = useState(false);

  const { email, password } = registerData;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === false || password !== repeatPassword) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    handleNextStep();
  }

  return (
    <div className="card p-3 my-2 ">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group>
          <h4 style={{ textAlign: "center" }}>Register</h4>
        </Form.Group>
        <ValidateFormInput
          name="email"
          placeholder="Enter email"
          type="email"
          label="Email"
          value={email}
          invalidMessage="Please enter email."
          setController={updateRegisterData}
        />
        <ValidateFormInput
          name="password"
          placeholder="Enter password"
          type="password"
          label="Password"
          value={password}
          invalidMessage="Please enter password."
          setController={updateRegisterData}
        />
        <ValidateFormInput
          name="Repeat Password Input"
          placeholder="Repeat password"
          type="password"
          label="Repeat password"
          value={repeatPassword}
          invalidMessage="Please repeate password."
          setController={(_, v) => setRepeatPassword(v)}
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
          <Button variant="primary" type="submit">
            Next step
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default RegisterStepOneForm;
