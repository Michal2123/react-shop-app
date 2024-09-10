import { Form } from "react-bootstrap";
import { ProductFilterKind } from "../enum/productFillterEnum";

interface Prop {
  title: string;
  category: ProductFilterKind;
  handleChangeCheck: (arg1: boolean, arg2: ProductFilterKind) => void;
}

const FilterFormCheck = ({ title, category, handleChangeCheck }: Prop) => {
  return (
    <Form.Group className="d-flex justify-content-between my-2">
      <Form.Label>{title}</Form.Label>
      <Form.Check
        onChange={(e) => handleChangeCheck(e.target.checked, category)}
      />
    </Form.Group>
  );
};

export default FilterFormCheck;
