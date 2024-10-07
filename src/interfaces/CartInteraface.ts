import { IProduct } from "./ProductInterface";
import { CartActionKind } from "../enum/CartEnum";

export interface ICartAction {
  type: CartActionKind;
  product?: IProduct;
}

export interface ICartItem {
  product: IProduct;
  count: number;
}

export interface ICartContext {
  cartList: ICartItem[];
}

export interface IUpdateCartContext {
  dispatch: React.Dispatch<ICartAction>;
}
