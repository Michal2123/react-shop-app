import { IProduct } from "./ProductInterface";
import { CartActionKind } from "../enum/CartEnum";

export interface ICartAction {
  type: CartActionKind;
  product: IProduct;
}

export interface ICartList {
  product: IProduct;
  count: number;
}

export interface ICartContext {
  cartList: ICartList[];
}

export interface IUpdateCartContext {
  dispatch: React.Dispatch<ICartAction>;
}
