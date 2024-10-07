import { FilterActionKind } from "../enum/productFillterEnum";
import {
  IFilterAction,
  IFilterCheckProp,
  IFilterProducts,
} from "../interfaces/ProductInterface";

function isReactEvent(
  object: any
): object is React.ChangeEvent<HTMLInputElement> {
  return "target" in object;
}

function isFilterCheckProp(object: any): object is IFilterCheckProp {
  return "filter" in object && "value" in object;
}

export default function useProductFilterReducer(
  draft: IFilterProducts,
  action: IFilterAction
) {
  const { type, params } = action;
  switch (type) {
    case FilterActionKind.CHANGEPRICERANGE:
      {
        if (isReactEvent(params)) {
          draft.priceRange = Number(params.target.value);
        }
      }
      break;
    case FilterActionKind.CHANGEFILTERCHECK:
      {
        if (isFilterCheckProp(params)) {
          const { value, filter } = params;
          if (value) {
            draft.categorys.push(filter);
            return;
          }
          draft.categorys = draft.categorys.filter((item) => item !== filter);
        }
      }
      break;

    default:
      break;
  }
}
