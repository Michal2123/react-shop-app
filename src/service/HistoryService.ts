import { ApiEndopnts, ConnectionPath } from "../enum/ConnectionEnum";
import {
  IGetHistoryItem,
  IPostHistoryItem,
} from "../interfaces/HistoryInterface";

export async function GetOrderHistory(
  userId: String
): Promise<IGetHistoryItem[]> {
  return await fetch(
    `${ConnectionPath.API}${ApiEndopnts.HISTORY}?userId=${userId}`
  )
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

export async function PostOrderToHistory(
  order: IPostHistoryItem
): Promise<Response> {
  return fetch(`${ConnectionPath.API}${ApiEndopnts.HISTORY}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...order,
    }),
  });
}
