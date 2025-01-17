import React from "react";
import { Form } from "react-bootstrap";

interface Prop {
  title: string;
  priceRange: number;
  handleChangeRange: (arg: React.ChangeEvent<HTMLInputElement>) => void;
}

const FilterFormRange: React.FunctionComponent<
  Prop & React.HTMLAttributes<HTMLDivElement>
> = ({ title, priceRange, handleChangeRange, className }) => {
  return (
    <Form.Label className={`d-flex flex-column ${className}`}>
      <div className="d-flex justify-content-between">
        <span>{title}</span>
        <span>{priceRange}</span>
      </div>
      <Form.Range
        name="Price Range"
        value={priceRange}
        onChange={handleChangeRange}
      />
    </Form.Label>
  );
};

export default FilterFormRange;
