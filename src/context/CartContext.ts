import { createContext } from "react";
import { ICartContext, IUpdateCartContext } from "../interfaces/CartInteraface";

export const CartContext = createContext<ICartContext>({
  cartList: [],
});

export const UpdateCartContext = createContext<IUpdateCartContext>({
  dispatch: () => undefined,
});
