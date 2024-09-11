import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ValidateFormInput from "./ValidateFormInput";

interface Prop {
  changeIsSignIn: () => void;
}

const SignInForm = ({ changeIsSignIn }: Prop) => {
  const [isLoading, setIsLoading] = useState(false);
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      setValidated(true);
      return;
    }
    setIsLoading(true);
    navigate("/");
  }

  return (
    <div className="card p-3 my-2">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group>
          <h4 style={{ textAlign: "center" }}>Sign In</h4>
        </Form.Group>
        <ValidateFormInput
          name="Email Input"
          placeholder="Enter email"
          type="email"
          label="Email"
          controller={email}
          invalidMessage="Please enter email."
          isLoading={isLoading}
          setController={setEmail}
        />

        <ValidateFormInput
          name="Password Input"
          placeholder="Enter password"
          type="password"
          label="Password"
          controller={password}
          invalidMessage="Please enter password."
          isLoading={isLoading}
          setController={setPassword}
        />
        <Form.Group className="mb-3">
          <Form.Text>
            Don't have account?
            <span
              style={{ color: "blue", cursor: "pointer" }}
              onClick={changeIsSignIn}
            >
              {" "}
              Register
            </span>
          </Form.Text>
        </Form.Group>
        <div className="d-flex justify-content-center">
          <Button variant="primary" type="submit" disabled={isLoading}>
            {isLoading ? "Loading..." : "Sign in"}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default SignInForm;
