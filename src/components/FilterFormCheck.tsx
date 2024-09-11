import { Form } from "react-bootstrap";
import { ProductFilterKind } from "../enum/productFillterEnum";

interface Prop {
  title: string;
  category: ProductFilterKind;
  handleChangeCheck: (arg1: boolean, arg2: ProductFilterKind) => void;
}

const FilterFormCheck = ({ title, category, handleChangeCheck }: Prop) => {
  return (
    <Form.Group className="my-3">
      <Form.Label className="d-flex justify-content-between ">
        {title}
        <Form.Check
          name={category}
          onChange={(e) => handleChangeCheck(e.target.checked, category)}
        />
      </Form.Label>
    </Form.Group>
  );
};

export default FilterFormCheck;
