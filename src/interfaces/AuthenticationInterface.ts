export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  token: string;
  address: string;
  city: string;
  zipCode: string;
}

export interface IAuthContext {
  user: IUser | undefined;
}

export interface IUpdateAuthContext {
  logIn: (user: IUser) => void;
  logOut: () => void;
}
