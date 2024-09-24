import { Button, Form } from "react-bootstrap";
import ValidateFormInput from "./ValidateFormInput";
import { useContext, useState } from "react";
import { UpdateEmail } from "../service/ProfileService";
import { IUser } from "../interfaces/AuthenticationInterface";
import { UpdateAuthContext } from "../context/AuthenticationContext";
import { useError } from "./ErrorProvider";

interface Prop {
  user: IUser;
}

const ProfileEmailTab = ({ user }: Prop) => {
  const { updateUser } = useContext(UpdateAuthContext);
  const { clearErrorMessage, handleError } = useError();
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
      .then((response) => {
        clearErrorMessage();
        if (!response.ok) {
          throw new Error(`${response.status}`);
        }
        alert("Email address has been updated.");
        updateUser({
          ...user,
          email,
        });
      })
      .catch((error: Error) => {
        clearErrorMessage();
        setEmail(userEmail);
        handleError(error.message, "Unable to update email address.");
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
