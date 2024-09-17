import { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import ValidateFormInput from "./ValidateFormInput";
import { UpdateAuthContext } from "../context/AuthenticationContext";
import { SignIn } from "../service/SignInService";

const SignInForm = () => {
  const { logIn } = useContext(UpdateAuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }
    SignIn(email, password)
      .then((user) => {
        logIn(user);
        navigate("/");
      })
      .catch((error: Error) => {
        alert("Something went wrong :(");
        console.log(error);
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
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
          value={email}
          invalidMessage="Please enter email."
          isLoading={isLoading}
          onChange={(_, v) => {
            setEmail(v);
          }}
        />

        <ValidateFormInput
          name="Password Input"
          placeholder="Enter password"
          type="password"
          label="Password"
          value={password}
          invalidMessage="Please enter password."
          isLoading={isLoading}
          onChange={(_, v) => {
            setPassword(v);
          }}
        />
        {!!error.length ? (
          <Form.Group className="mb-2" style={{ textAlign: "center" }}>
            <Form.Text style={{ color: "rgb(220, 53, 69)" }}>{error}</Form.Text>
          </Form.Group>
        ) : null}

        <Form.Group className="mb-3" style={{ textAlign: "center" }}>
          <Form.Text>
            Don't have account?
            <NavLink
              style={{ color: "blue", cursor: "pointer" }}
              to={"/register"}
            >
              {" "}
              Register
            </NavLink>
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
