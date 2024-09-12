import { Form } from "react-bootstrap";

interface Prop {
  name: string;
  type: string;
  label: string;
  placeholder: string;
  value: string;
  setController: (name: string, value: string) => void;
  isLoading?: boolean | undefined;
  invalidMessage: string | undefined;
  isInvalid?: boolean;
}

const ValidateFormInput = ({
  name,
  placeholder,
  type,
  label,
  value,
  invalidMessage,
  isLoading,
  isInvalid,
  setController,
}: Prop) => {
  return (
    <Form.Group className="my-2">
      <Form.Label>
        {label}
        <Form.Control
          name={name}
          className="shadow-none rounded-0 input-nav-search mt-1"
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => {
            setController(e.target.name, e.target.value);
          }}
          disabled={isLoading}
          required
          isInvalid={isInvalid}
        />
        <Form.Control.Feedback type="invalid">
          {invalidMessage}
        </Form.Control.Feedback>
      </Form.Label>
    </Form.Group>
  );
};

export default ValidateFormInput;
