import { Form } from "react-bootstrap";
import { ProductCategoryKind } from "../enum/productFillterEnum";

interface Prop {
  title: string;
  filterCategorys: ProductCategoryKind[];
  category: ProductCategoryKind;
  handleChangeCheck: (arg1: boolean, arg2: ProductCategoryKind) => void;
}

const FilterFormCheck: React.FunctionComponent<
  Prop & React.HTMLAttributes<HTMLDivElement>
> = ({ title, category, filterCategorys, handleChangeCheck, className }) => {
  const isChecked = filterCategorys.find(
    (filterCategory) => filterCategory === category
  )
    ? true
    : false;

  return (
    <Form.Group className={className}>
      <Form.Label className="d-flex justify-content-between ">
        {title}
        <Form.Check
          name={category}
          checked={isChecked}
          onChange={(e) => handleChangeCheck(e.target.checked, category)}
        />
      </Form.Label>
    </Form.Group>
  );
};

export default FilterFormCheck;
