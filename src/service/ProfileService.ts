import { ApiEndopnts, ConnectionPath } from "../enum/ConnectionEnum";
import { IShippingDetails } from "../interfaces/ProfileInterface";

export async function UpdateShippingDetails(
  shippingDetails: IShippingDetails,
  userId: string
): Promise<Response> {
  const token = localStorage.getItem("token")?.replace(/['"]+/g, "");
  return await fetch(
    `${ConnectionPath.API}/640${ApiEndopnts.USERS}/${userId}`,
    {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...shippingDetails,
      }),
    }
  );
}

export async function UpdateEmail(
  email: string,
  userId: string
): Promise<Response> {
  const token = localStorage.getItem("token")?.replace(/['"]+/g, "");
  return await fetch(
    `${ConnectionPath.API}/640${ApiEndopnts.USERS}/${userId}`,
    {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    }
  );
}

export async function UpdatePassword(
  password: string,
  userId: string
): Promise<Response> {
  const token = localStorage.getItem("token")?.replace(/['"]+/g, "");
  return await fetch(
    `${ConnectionPath.API}/640${ApiEndopnts.USERS}/${userId}`,
    {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password,
      }),
    }
  );
}
