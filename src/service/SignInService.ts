import { ApiEndopnts, ConnectionPath } from "../enum/ConnectionEnum";
import { IUser } from "../interfaces/AuthenticationInterface";

export async function SignIn(email: string, password: string): Promise<IUser> {
  return fetch(
    `${ConnectionPath.API}${ApiEndopnts.USERS}/?email=${email}&password=${password}&singular=1`
  )
    .then((response) => response.json())
    .then((user: any[]) => {
      if (!user.length) {
        throw Error("Incorrect email or password");
      }
      user[0].password = undefined;
      return user[0] as IUser;
    });
}
