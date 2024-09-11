import { Form } from "react-bootstrap";

interface Prop {
  name: string;
  type: string;
  label: string;
  placeholder: string;
  controller: string;
  setController: (arg: string) => void;
  isLoading: boolean;
  invalidMessage: string;
}

const ValidateFormInput = ({
  name,
  placeholder,
  type,
  label,
  controller,
  invalidMessage,
  isLoading,
  setController,
}: Prop) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label>
        {label}
        <Form.Control
          name={name}
          className="shadow-none rounded-0 input-nav-search mt-1"
          type={type}
          placeholder={placeholder}
          value={controller}
          onChange={(e) => {
            setController(e.target.value);
          }}
          disabled={isLoading}
          required
        />
        <Form.Control.Feedback type="invalid">
          {invalidMessage}
        </Form.Control.Feedback>
      </Form.Label>
    </Form.Group>
  );
};

export default ValidateFormInput;
