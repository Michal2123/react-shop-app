import { Button, Form } from "react-bootstrap";
import { ProductFilterKind } from "../enum/productFillterEnum";
import { useImmer } from "use-immer";
import { IFilterProducts } from "../interfaces/SideBarInterface";
import { useContext } from "react";
import { FilterProductContext } from "../context/ProductContext";

const Sidebar = () => {
  const [filters, setFilters] = useImmer<IFilterProducts>({
    filters: [],
    priceRange: 100,
  });

  const { updateProductList } = useContext(FilterProductContext);

  function handleChangeCheck(value: boolean, filter: ProductFilterKind) {
    setFilters((draft) => {
      if (value) {
        draft.filters.push(filter);
        return;
      }
      draft.filters = draft.filters.filter((item) => item !== filter);
    });
  }

  function handleChangeSlider(event: React.ChangeEvent<HTMLInputElement>) {
    setFilters((draft) => {
      draft.priceRange = Number(event.target.value);
    });
  }

  function handleclickSubmit(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.preventDefault();
    updateProductList(filters);
  }

  return (
    <div
      className="position-fixed vh-100 navbar-light "
      style={{
        maxWidth: "200px",
        minWidth: "75px",
        width: "15%",
      }}
    >
      <div className="mx-3" style={{ marginTop: " 25px" }}>
        <div className="d-flex justify-content-between">
          <Form.Label>Max price</Form.Label>
          <Form.Label>{filters.priceRange}</Form.Label>
        </div>

        <Form.Range value={filters.priceRange} onChange={handleChangeSlider} />
        <Form.Group className="d-flex justify-content-between my-2">
          <Form.Label>Vegetables</Form.Label>
          <Form.Check
            onChange={(e) =>
              handleChangeCheck(e.target.checked, ProductFilterKind.VEGETABLES)
            }
          />
        </Form.Group>
        <Form.Group className="d-flex justify-content-between my-2">
          <Form.Label>Fruits</Form.Label>
          <Form.Check
            onChange={(e) =>
              handleChangeCheck(e.target.checked, ProductFilterKind.FRUITS)
            }
          />
        </Form.Group>
        <Form.Group className="d-flex justify-content-between my-2">
          <Form.Label>Seeds</Form.Label>
          <Form.Check
            onChange={(e) =>
              handleChangeCheck(e.target.checked, ProductFilterKind.SEEDS)
            }
          />
        </Form.Group>
        <Form.Group className="d-flex justify-content-between my-2">
          <Form.Label>Nuts</Form.Label>
          <Form.Check
            onChange={(e) =>
              handleChangeCheck(e.target.checked, ProductFilterKind.NUTS)
            }
          />
        </Form.Group>
        <div className="d-flex justify-content-end my-2">
          <Button type="submit" onClick={handleclickSubmit}>
            Filter
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
