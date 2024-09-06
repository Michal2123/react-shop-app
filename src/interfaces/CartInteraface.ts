import ProductInterface from "./ProductInterface";
import { CartActionKind } from "../enum/CartEnum";

export interface ICartAction {
  type: CartActionKind;
  product: ProductInterface;
}

export interface ICartList {
  product: ProductInterface;
  count: number;
}

export interface ICartContext {
  cartList: ICartList[];
}

export interface IUpdateCartContext {
  dispatch: React.Dispatch<ICartAction>;
}
