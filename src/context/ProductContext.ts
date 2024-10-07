import { createContext } from "react";
import {
  IProductContext,
  IUpdateProductContext,
} from "../interfaces/ProductInterface";

export const ProductContext = createContext<IProductContext>({
  productList: [],
});

export const UpdateProductContext = createContext<IUpdateProductContext>({
  filterProductList: () => {},
  resetProductList: () => {},
});
