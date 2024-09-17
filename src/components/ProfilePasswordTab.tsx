import { Button, Form } from "react-bootstrap";
import ValidateFormInput from "./ValidateFormInput";
import { useState } from "react";
import { UpdatePassword } from "../service/ProfileService";
import { IUser } from "../interfaces/AuthenticationInterface";

interface Prop {
  user: IUser;
}

const ProfilePasswordTab = ({ user }: Prop) => {
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [validated, setValidated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === false || password !== repeatPassword) {
      e.stopPropagation();
      setIsPasswordValid(false);
      setValidated(true);
      return;
    }

    setIsLoading(true);
    UpdatePassword(password, user.id)
      .then(() => {
        alert("Password has been updated.");
        setPassword("");
        setRepeatPassword("");
        setValidated(false);
        setIsPasswordValid(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }
  return (
    <div className="mx-3">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <ValidateFormInput
          className="shadow-none rounded-0 input-nav-search"
          name="password"
          placeholder="Enter password"
          type="password"
          label="Password"
          value={password}
          invalidMessage="Please enter password."
          onChange={(_, v) => setPassword(v)}
        />
        <ValidateFormInput
          className="shadow-none rounded-0 input-nav-search"
          name="Repeat Password Input"
          placeholder="Repeat password"
          type="password"
          label="Repeat password"
          value={repeatPassword}
          invalidMessage="Password and repeated password must be the same."
          isInvalid={!isPasswordValid}
          onChange={(_, v) => setRepeatPassword(v)}
        />
        <div className="d-flex justify-content-end">
          <Button
            variant="primary"
            type="submit"
            disabled={isLoading || (password === "" && repeatPassword === "")}
          >
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default ProfilePasswordTab;
