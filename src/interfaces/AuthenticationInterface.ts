export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  token: string;
  address: string;
  city: string;
  zipCode: string;
}

export interface IAuthData {
  accessToken: string;
  user: IUser;
}

export interface IAuthContext {
  user: IUser | undefined;
}

export interface IUpdateAuthContext {
  logIn: (authData: IAuthData) => void;
  logOut: () => void;
  updateUser: (user: IUser) => void;
}

export interface ILogin {
  email: string;
  password: string;
}
