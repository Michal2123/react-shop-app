import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ValidateFormInput from "./ValidateFormInput";

interface Prop {
  changeIsSignIn: () => void;
}

const RegisterForm = ({ changeIsSignIn }: Prop) => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [validated, setValidated] = useState(false);

  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    const form = e.currentTarget;
    if (form.checkValidity() === false || password !== repeatPassword) {
      e.preventDefault();
      e.stopPropagation();
      setValidated(true);
      return;
    }
    setIsLoading(true);

    fetch("http://localhost:3001/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
        token: "lshbdfouwegrlqweh2138uelkn",
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        console.log("User added:", user);
        navigate("/");
      })
      .finally(() => {
        setIsLoading(false);
        setEmail("");
        setPassword("");
        setRepeatPassword("");
      });
  }

  return (
    <div className="card p-3 my-2 ">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group>
          <h4 style={{ textAlign: "center" }}>Register</h4>
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
        <ValidateFormInput
          name="Repeate Password Input"
          placeholder="Repeate password"
          type="password"
          label="Repeate password"
          controller={repeatPassword}
          invalidMessage="Please repeate password."
          isLoading={isLoading}
          setController={setRepeatPassword}
        />

        <Form.Group className="mb-3">
          <Form.Text>
            Already have account?
            <span
              style={{ color: "blue", cursor: "pointer" }}
              onClick={changeIsSignIn}
            >
              {" "}
              Sign in
            </span>
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

export default RegisterForm;
