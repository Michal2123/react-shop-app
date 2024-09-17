import { Form } from "react-bootstrap";

interface Prop {
  className?: string | undefined;
  name: string;
  type: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (name: string, value: string) => void;
  isLoading?: boolean | undefined;
  disabled?: boolean | undefined;
  invalidMessage: string | undefined;
  isInvalid?: boolean;
}

const ValidateFormInput = ({
  className,
  name,
  placeholder,
  type,
  label,
  value,
  invalidMessage,
  isLoading,
  isInvalid,
  disabled,
  onChange,
}: Prop) => {
  return (
    <Form.Group className="my-2">
      <Form.Label style={{ fontWeight: "500" }}>
        {label}
        <Form.Control
          name={name}
          className={className}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => {
            onChange(e.target.name, e.target.value);
          }}
          disabled={isLoading || disabled}
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
