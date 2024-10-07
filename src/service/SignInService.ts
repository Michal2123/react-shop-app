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
    .then((response) => {
      if (!response.ok) {
        if (response.status === 400) {
          throw new Error("Wrong email or password.");
        }
        throw new Error("Unable to login.");
      }
      return response.json();
    })
    .then((data: IAuthData) => data);
}
