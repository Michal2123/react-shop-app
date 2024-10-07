import { ApiEndopnts, ConnectionPath } from "../enum/ConnectionEnum";
import { IAuthData } from "../interfaces/AuthenticationInterface";
import { IRegisterData } from "../interfaces/RegisterInterface";

export async function Register(
  registerData: IRegisterData
): Promise<IAuthData> {
  return await fetch(`${ConnectionPath.API}${ApiEndopnts.REGISTER}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...registerData,
    }),
  })
    .then((response) => response.json())
    .then((data: IAuthData) => data);
}
