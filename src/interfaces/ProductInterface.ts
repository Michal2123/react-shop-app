import { IFilterProducts } from "./SideBarInterface";

export interface IProduct {
  id: number;
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
  updateProductList: (arg: IFilterProducts) => void;
}
