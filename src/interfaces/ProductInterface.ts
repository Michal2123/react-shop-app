import {
  FilterActionKind,
  ProductCategoryKind,
} from "../enum/productFillterEnum";

export interface IProduct {
  id: string;
  name: string;
  describe: string;
  image: string;
  price: number;
  category: string;
}

export interface IProductContext {
  productList: IProduct[];
}

export interface IUpdateProductContext {
  filterProductList: (arg: IFilterProducts) => void;
  resetProductList: () => void;
}

export interface IProductListPage {
  page: number;
  localProductList: IProduct[];
}

export interface IFilterProducts {
  categorys: ProductCategoryKind[];
  priceRange: number;
}

export interface IFilterCheckProp {
  value: boolean;
  filter: ProductCategoryKind;
}

export interface IFilterAction {
  type: FilterActionKind;
  params: IFilterCheckProp | React.ChangeEvent<HTMLInputElement> | undefined;
}

export interface IUpdateFilterContext {
  dispatch: React.Dispatch<IFilterAction>;
}
