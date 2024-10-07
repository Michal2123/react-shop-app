import { useContext } from "react";
import { Form } from "react-bootstrap";
import { ThemeContext } from "../../context/ThemeContext";

interface Prop {
  className?: string;
  name: string;
  type: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (name: string, value: string) => void;
  isLoading?: boolean | undefined;
  disabled?: boolean | undefined;
  invalidMessage?: string;
  isInvalid?: boolean;
  pattern?: string;
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
  pattern,
  disabled,
  onChange,
}: Prop) => {
  const { isDark } = useContext(ThemeContext);
  return (
    <Form.Group className="my-2">
      <Form.Label style={{ fontWeight: "500" }}>
        <div className={`input-label ${isDark ? "dark" : "light"}`}>
          {label}
        </div>
        <Form.Control
          name={name}
          className={`${className} ${isDark ? "dark" : "light"}`}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => {
            onChange(e.target.name, e.target.value);
          }}
          disabled={isLoading || disabled}
          required
          isInvalid={isInvalid}
          pattern={pattern}
        />
        <Form.Control.Feedback type="invalid">
          {invalidMessage}
        </Form.Control.Feedback>
      </Form.Label>
    </Form.Group>
  );
};

export default ValidateFormInput;
