import { ApiEndopnts, ConnectionPath } from "../enum/ConnectionEnum";
import { IRegisterData } from "../interfaces/RegisterInterface";

// Function connect to POST auth regiser endpoint, create new account and user
export async function Register(registerData: IRegisterData): Promise<string> {
  return await fetch(`${ConnectionPath.API}${ApiEndopnts.REGISTER}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...registerData,
    }),
  })
    .then((response) => response.json())
    .then((token: string) => token);
}
