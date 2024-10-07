import { ApiEndopnts, ConnectionPath } from "../enum/ConnectionEnum";
import { IProduct } from "../interfaces/ProductInterface";

export async function GetAllProducts(): Promise<IProduct[]> {
  return await fetch(`${ConnectionPath.API}${ApiEndopnts.PRODUCTS}`)
    .then((response) => response.json())
    .then((data: IProduct[]) => {
      if (!data.length) {
        throw Error("Unable to get products");
      }
      return data;
    });
}
