import { ProductFilterKind } from "../enum/productFillterEnum";

export interface IFilterProducts {
  filters: ProductFilterKind[];
  priceRange: number;
}
