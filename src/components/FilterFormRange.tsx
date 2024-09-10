import { Form } from "react-bootstrap";

interface Prop {
  title: string;
  priceRange: number;
  handleChangeRange: (arg: React.ChangeEvent<HTMLInputElement>) => void;
}

const FilterFormRange = ({ title, priceRange, handleChangeRange }: Prop) => {
  return (
    <>
      <div className="d-flex justify-content-between">
        <Form.Label>{title}</Form.Label>
        <Form.Label>{priceRange}</Form.Label>
      </div>

      <Form.Range value={priceRange} onChange={handleChangeRange} />
    </>
  );
};

export default FilterFormRange;
