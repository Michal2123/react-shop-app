import { ApiEndopnts, ConnectionPath } from "../enum/ConnectionEnum";
import { IShippingDetails } from "../interfaces/ProfileInterface";

export async function UpdateShippingDetails(
  shippingDetails: IShippingDetails,
  userId: string
) {
  await fetch(`${ConnectionPath.API}${ApiEndopnts.USERS}/${userId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...shippingDetails,
    }),
  }).catch((error: Error) => {
    alert("Unable to save shipping details");
    console.log(`Unable to save sipping detail ${error.message}`);
  });
}

export async function UpdateEmail(email: string, userId: string) {
  await fetch(`${ConnectionPath.API}${ApiEndopnts.USERS}/${userId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email,
    }),
  }).catch((error: Error) => {
    alert("Unable to update email address.");
    console.log(error.message);
  });
}

export async function UpdatePassword(password: string, userId: string) {
  await fetch(`${ConnectionPath.API}${ApiEndopnts.USERS}/${userId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      password,
    }),
  }).catch((error: Error) => {
    alert("Unable to update passowrd.");
    console.log(error.message);
  });
}
