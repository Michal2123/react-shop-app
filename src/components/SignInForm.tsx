import { Button, Form } from "react-bootstrap";

interface Prop {
  changeIsSignIn: () => void;
}

const SignInForm = ({ changeIsSignIn }: Prop) => {
  return (
    <div className="card p-3 my-2">
      <Form>
        <Form.Group>
          <h4 style={{ textAlign: "center" }}>Sign In</h4>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            className="shadow-none rounded-0 input-nav-search"
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            className="shadow-none rounded-0 input-nav-search"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
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
          <Button
            variant="primary"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              alert("Sign in");
            }}
          >
            Sign in
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default SignInForm;
