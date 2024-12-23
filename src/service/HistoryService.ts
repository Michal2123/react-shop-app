import { ApiEndopnts, ConnectionPath } from "../enum/ConnectionEnum";
import {
  IGetHistoryItem,
  IPostHistoryItem,
} from "../interfaces/HistoryInterface";
import { getToken } from "../utlis/token";

// Function fetch list of all user order history
export async function GetOrderHistory(): Promise<IGetHistoryItem[]> {
  const token = getToken();
  return await fetch(`${ConnectionPath.API}${ApiEndopnts.HISTORY}`, {
    method: "GET",
    headers: { Authorization: `${token}` },
  })
    .then((response) => {
      if (!response.ok) {
        throw Error("Unable to get products");
      }
      return response.json();
    })
    .then((data: IGetHistoryItem[]) => {
      return data;
    });
}

// Function POSt new order to user order history
export async function PostOrderToHistory(
  order: IPostHistoryItem
): Promise<Response> {
  const token = getToken();
  return fetch(`${ConnectionPath.API}${ApiEndopnts.HISTORY}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `${token}` },
    body: JSON.stringify({
      ...order,
    }),
  });
}
