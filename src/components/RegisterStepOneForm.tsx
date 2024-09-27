import { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import ValidateFormInput from "./ValidateFormInput";
import { IRegisterData } from "../interfaces/RegisterInterface";
import { ThemeContext } from "../context/ThemeContext";

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
    e.preventDefault();
    if (form.checkValidity() === false || password !== repeatPassword) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    handleNextStep();
  }

  return (
    <div
      className={`card ${isDark ? "dark" : "light"} p-3 my-2`}
      data-bs-theme={`${isDark ? "dark" : "light"}`}
    >
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
          <Button variant="primary" type="submit">
            Next step
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default RegisterStepOneForm;
