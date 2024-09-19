import { IFilterProducts } from "./SideBarInterface";

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
