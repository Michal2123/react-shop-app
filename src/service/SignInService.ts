import { ApiEndopnts, ConnectionPath } from "../enum/ConnectionEnum";
import { IAuthData } from "../interfaces/AuthenticationInterface";

export async function SignIn(
  email: string,
  password: string
): Promise<IAuthData> {
  return fetch(`${ConnectionPath.API}${ApiEndopnts.SIGNIN}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })
    .then((response) => response.json())
    .then((data: IAuthData) => data);
}
