import { Button, Form } from "react-bootstrap";
import ValidateFormInput from "./ValidateFormInput";
import { useState } from "react";
import { UpdateEmail } from "../service/ProfileService";
import { IUser } from "../interfaces/AuthenticationInterface";

interface Prop {
  user: IUser;
  updateUser: (user: IUser) => void;
}

const ProfileEmailTab = ({ user, updateUser }: Prop) => {
  const userEmail = user.email;
  const [email, setEmail] = useState(userEmail);
  const [validated, setValidated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    const form = e.currentTarget;
    e.preventDefault();
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    setIsLoading(true);
    UpdateEmail(email, user.id)
      .then((_) => {
        alert("Email address has been updated.");
        updateUser({
          ...user,
          email,
        });
      })
      .finally(() => setIsLoading(false));
  }

  return (
    <div className="mx-3">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <ValidateFormInput
          className="input-form"
          name="email"
          placeholder="Enter email"
          type="email"
          label="Email address"
          value={email}
          invalidMessage="Please enetr email address."
          onChange={(_, v) => setEmail(v)}
        />
        <div className="d-flex justify-content-end">
          <Button
            variant="primary"
            type="submit"
            disabled={isLoading || email === userEmail}
          >
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default ProfileEmailTab;
