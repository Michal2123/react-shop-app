import { ApiEndopnts, ConnectionPath } from "../enum/ConnectionEnum";
import { IAuthData } from "../interfaces/AuthenticationInterface";

// Function connect to POST auth login endopint, return user data and token
export async function SignIn(
  email: string,
  password: string
): Promise<IAuthData> {
  return await fetch(`${ConnectionPath.API}${ApiEndopnts.SIGNIN}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })
    .then(async (response) => {
      const data: IAuthData = await response.json();
      return data;
    })
    .catch((error: Error) => {
      throw new Error(error.message);
    });
}
