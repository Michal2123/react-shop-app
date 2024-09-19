import { Button } from "react-bootstrap";
import { ProductFilterKind } from "../enum/productFillterEnum";
import { useImmer } from "use-immer";
import { IFilterProducts } from "../interfaces/SideBarInterface";
import { useContext } from "react";
import { FilterProductContext } from "../context/ProductContext";
import FilterFormCheck from "./FilterFormCheck";
import FilterFormRange from "./FilterFormRange";

const Sidebar = () => {
  const [filters, setFilters] = useImmer<IFilterProducts>({
    filters: [],
    priceRange: 100,
  });

  const { filterProductList } = useContext(FilterProductContext);

  function handleChangeCheck(value: boolean, filter: ProductFilterKind) {
    setFilters((draft) => {
      if (value) {
        draft.filters.push(filter);
        return;
      }
      draft.filters = draft.filters.filter((item) => item !== filter);
    });
  }

  function handleChangeRange(event: React.ChangeEvent<HTMLInputElement>) {
    setFilters((draft) => {
      draft.priceRange = Number(event.target.value);
    });
  }

  function handleclickSubmit(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.preventDefault();
    filterProductList(filters);
  }

  return (
    <div className="position-fixed vh-100 navbar-light side-bar ">
      <div className="mx-3" style={{ marginTop: " 25px" }}>
        <FilterFormRange
          title="Max price"
          priceRange={filters.priceRange}
          handleChangeRange={handleChangeRange}
        />
        <FilterFormCheck
          title="Vegetables"
          category={ProductFilterKind.VEGETABLES}
          handleChangeCheck={handleChangeCheck}
        />
        <FilterFormCheck
          title="Fruits"
          category={ProductFilterKind.FRUITS}
          handleChangeCheck={handleChangeCheck}
        />
        <FilterFormCheck
          title="Seeds"
          category={ProductFilterKind.SEEDS}
          handleChangeCheck={handleChangeCheck}
        />
        <FilterFormCheck
          title="Nuts"
          category={ProductFilterKind.NUTS}
          handleChangeCheck={handleChangeCheck}
        />

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
