export interface User {
  _id: string;
  token: string;
  email: string;
  name: string;
  password?: string;
}

export interface AuthState {
  user: User | null;
  isLoggedIn: boolean,
  isLoggedInError: boolean,
  isRegistered: boolean,
  isRegisteredError: boolean,

}

export interface RegisterInfo {
  name: string;
  email: string;
  password: string;
}

export interface RegisterResponse {
  _id: string;
  name?: string;
  email: string;
  token: string;
}
