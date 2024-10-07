import { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import ValidateFormInput from "../customes/ValidateFormInput";
import { IRegisterData } from "../../interfaces/RegisterInterface";
import { ThemeContext } from "../../context/ThemeContext";

interface Prop {
  registerData: IRegisterData;
  updateRegisterData: (name: string, value: string) => void;
  handleNextStep: () => void;
}

const RegisterStepOneForm = ({
  registerData,
  handleNextStep,
  updateRegisterData,
}: Prop) => {
  const { isDark } = useContext(ThemeContext);
  const [repeatPassword, setRepeatPassword] = useState("");
  const [validated, setValidated] = useState(false);

  const { email, password } = registerData;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      handleNextStep();
    }
    setValidated(true);
  }

  return (
    <div className={`card p-3 my-2`} data-bs-theme={isDark ? "dark" : "light"}>
      <Form
        noValidate
        data-testid="step-one-register-form"
        validated={validated}
        onSubmit={handleSubmit}
      >
        <Form.Group>
          <h4 style={{ textAlign: "center" }}>Register</h4>
        </Form.Group>
        <ValidateFormInput
          name="email"
          placeholder="Enter email"
          type="email"
          label="Email"
          value={email}
          isInvalid={validated && !/^\S+@\S+\.\S+$/.test(email)}
          invalidMessage="Please enter email."
          onChange={updateRegisterData}
        />
        <ValidateFormInput
          name="password"
          placeholder="Enter password"
          type="password"
          label="Password"
          value={password}
          invalidMessage="Please enter password."
          onChange={updateRegisterData}
        />
        <ValidateFormInput
          name="Repeat Password Input"
          placeholder="Repeat password"
          type="password"
          label="Repeat password"
          value={repeatPassword}
          pattern={password}
          isInvalid={validated && password !== repeatPassword}
          invalidMessage="Please repeate password."
          onChange={(_, v) => setRepeatPassword(v)}
        />

        <Form.Group className="mb-3">
          <Form.Text>
            Already have account?
            <NavLink
              style={{
                color: `${isDark ? "darkcyan" : "blue"}`,
                cursor: "pointer",
              }}
              to={"/signin"}
            >
              {" "}
              Sign in
            </NavLink>
          </Form.Text>
        </Form.Group>
        <div className="d-flex justify-content-center">
          <Button name="Next step" variant="primary" type="submit">
            Next step
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default RegisterStepOneForm;
