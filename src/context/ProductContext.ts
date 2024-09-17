import { createContext } from "react";
import {
  IProductContext,
  IUpdateProductContext,
} from "../interfaces/ProductInterface";

export const ProductContext = createContext<IProductContext>({
  productList: [],
});

export const FilterProductContext = createContext<IUpdateProductContext>({
  filterProductList: () => {},
  resetProductList: () => {},
});
