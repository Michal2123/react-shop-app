import { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import ValidateFormInput from "../customes/ValidateFormInput";
import { UpdateAuthContext } from "../../context/AuthenticationContext";
import { SignIn } from "../../service/SignInService";
import { UpdateHistoryContext } from "../../context/HostoryContext";
import { ThemeContext } from "../../context/ThemeContext";
import { useError } from "../providers/ErrorProvider";

const SignInForm = () => {
  const { logIn } = useContext(UpdateAuthContext);
  const { getUserHistory } = useContext(UpdateHistoryContext);
  const { isDark } = useContext(ThemeContext);
  const { errorMessage, clearErrorMessage, handleError } = useError();
  const [isLoading, setIsLoading] = useState(false);
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      SignIn(email, password)
        .then((data) => {
          clearErrorMessage();
          logIn(data);
          getUserHistory(data.user.id);
          navigate("/");
        })
        .catch((error: Error) => {
          clearErrorMessage();
          handleError("", error.message);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }

    setValidated(true);
  }

  return (
    <div className={`card p-3 my-2`} data-bs-theme={isDark ? "dark" : "light"}>
      <Form
        data-testid="sign-in-form"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
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
        {errorMessage ?? (
          <Form.Group className="mb-2" style={{ textAlign: "center" }}>
            <Form.Text style={{ color: "rgb(220, 53, 69)" }}>
              {errorMessage}
            </Form.Text>
          </Form.Group>
        )}

        <Form.Group className="mb-3" style={{ textAlign: "center" }}>
          <Form.Text>
            Don't have account?
            <NavLink
              style={{
                color: `${isDark ? "darkcyan" : "blue"}`,
                cursor: "pointer",
              }}
              to={"/register"}
            >
              {" "}
              Register
            </NavLink>
          </Form.Text>
        </Form.Group>
        <div className="d-flex justify-content-center">
          <Button
            name="Sign In"
            variant="primary"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Sign in"}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default SignInForm;
