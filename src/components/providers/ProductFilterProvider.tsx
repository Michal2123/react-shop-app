import { ReactNode } from "react";
import { useImmerReducer } from "use-immer";
import {
  IFilterAction,
  IFilterProducts,
} from "../../interfaces/ProductInterface";
import useProductFilterReducer from "../../hooks/useProductFilterReducer";
import {
  FilterContext,
  UpdateFilterContext,
} from "../../context/ProductFilterContext";

interface Prop {
  children: ReactNode;
}

const ProductFilterProvider = ({ children }: Prop) => {
  const [filters, dispatch] = useImmerReducer<IFilterProducts, IFilterAction>(
    useProductFilterReducer,
    {
      categorys: [],
      priceRange: 100,
    }
  );
  return (
    <FilterContext.Provider value={filters}>
      <UpdateFilterContext.Provider value={{ dispatch }}>
        {children}
      </UpdateFilterContext.Provider>
    </FilterContext.Provider>
  );
};

export default ProductFilterProvider;
