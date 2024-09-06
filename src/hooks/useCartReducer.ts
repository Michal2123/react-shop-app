import { CartActionKind } from "../enum/CartEnum";
import { ICartAction, ICartList } from "../interfaces/CartInteraface";

export default function useCartReducer(
  draft: ICartList[],
  action: ICartAction
) {
  const { type, product } = action;
  switch (type) {
    case CartActionKind.ADD:
      {
        draft.push({
          product,
          count: 1,
        });
      }
      break;
    case CartActionKind.INCRESECOUNT:
      {
        const item = draft.find((a) => a.product.id === product.id);
        item && item.count++;
      }
      break;
    case CartActionKind.DECRESESECOUNT:
      {
        const item = draft.find((a) => a.product.id === product.id);
        item && item.count--;
      }
      break;
    case CartActionKind.DELETE:
      return draft.filter((item) => item.product.id !== product.id);

    default:
      break;
  }
}
