import { createContext } from "react";
import {
  IFilterProducts,
  IUpdateFilterContext,
} from "../interfaces/ProductInterface";

export const FilterContext = createContext<IFilterProducts>({
  categorys: [],
  priceRange: 100,
});

export const UpdateFilterContext = createContext<IUpdateFilterContext>({
  dispatch: () => {},
});
