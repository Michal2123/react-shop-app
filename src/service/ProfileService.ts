import { ApiEndopnts, ConnectionPath } from "../enum/ConnectionEnum";
import { IShippingDetails } from "../interfaces/ProfileInterface";
import { getToken } from "../utlis/token";

//Functon connect to PATCH user endpoint and update user shipping data
export async function UpdateShippingDetails(
  shippingDetails: IShippingDetails
): Promise<Response> {
  const token = getToken();
  return await fetch(`${ConnectionPath.API}${ApiEndopnts.USERS}`, {
    method: "PATCH",
    headers: {
      Authorization: `${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...shippingDetails,
    }),
  });
}
