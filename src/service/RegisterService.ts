import { ApiEndopnts, ConnectionPath } from "../enum/ConnectionEnum";
import { IRegisterData } from "../interfaces/RegisterInterface";

export async function Register(registerData: IRegisterData): Promise<Response> {
  return await fetch(`${ConnectionPath.API}${ApiEndopnts.USERS}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...registerData,
      token: "lshbdfouwegrlqweh2138uelkn",
    }),
  });
}
