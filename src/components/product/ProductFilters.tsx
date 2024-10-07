import { Button } from "react-bootstrap";
import { useContext } from "react";
import { UpdateProductContext } from "../../context/ProductContext";
import {
  FilterContext,
  UpdateFilterContext,
} from "../../context/ProductFilterContext";
import {
  FilterActionKind,
  ProductCategoryKind,
} from "../../enum/productFillterEnum";
import { IFilterCheckProp } from "../../interfaces/ProductInterface";
import FilterFormRange from "../sidebar/FilterFormRange";
import FilterFormCheck from "../sidebar/FilterFormCheck";

interface Prop {
  buttonMargin: string;
}

const ProductsFilters: React.FunctionComponent<
  Prop & React.HTMLAttributes<HTMLDivElement>
> = ({ buttonMargin, className }) => {
  const { filterProductList } = useContext(UpdateProductContext);
  const filters = useContext(FilterContext);
  const { categorys, priceRange } = filters;
  const { dispatch } = useContext(UpdateFilterContext);

  function handleRangeChange(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: FilterActionKind.CHANGEPRICERANGE,
      params: e,
    });
  }

  function handleCheckChange(value: boolean, filter: ProductCategoryKind) {
    const params: IFilterCheckProp = {
      value,
      filter,
    };
    dispatch({
      type: FilterActionKind.CHANGEFILTERCHECK,
      params,
    });
  }

  function handleClickSubmit(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();
    filterProductList(filters);
  }

  return (
    <>
      <div className={className}>
        <FilterFormRange
          className="mb-3"
          title="Max price"
          priceRange={priceRange}
          handleChangeRange={handleRangeChange}
        />
        <FilterFormCheck
          className="my-4"
          title="Vegetables"
          filterCategorys={categorys}
          category={ProductCategoryKind.VEGETABLES}
          handleChangeCheck={handleCheckChange}
        />
        <FilterFormCheck
          className="my-4"
          title="Fruits"
          filterCategorys={categorys}
          category={ProductCategoryKind.FRUITS}
          handleChangeCheck={handleCheckChange}
        />
        <FilterFormCheck
          className="my-4"
          title="Seeds"
          filterCategorys={categorys}
          category={ProductCategoryKind.SEEDS}
          handleChangeCheck={handleCheckChange}
        />
        <FilterFormCheck
          className="my-4"
          title="Nuts"
          filterCategorys={categorys}
          category={ProductCategoryKind.NUTS}
          handleChangeCheck={handleCheckChange}
        />
      </div>
      <div className={`d-flex justify-content-end ${buttonMargin}`}>
        <Button type="submit" onClick={handleClickSubmit}>
          Filter
        </Button>
      </div>
    </>
  );
};

export default ProductsFilters;
