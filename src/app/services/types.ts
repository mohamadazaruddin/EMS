import ky from "ky";

export type LoginParamsType = {
  username: string;
  password: string;
};

export type ApiHandler<T, U> = (
  baseHttpClient: typeof ky,
  params: U
) => Promise<T>;
export type MyClientOptions = {
  authRequired: boolean;
  additionalHeader?: AdditionalHeaderOptions[];
};
export type AdditionalHeaderOptions = {
  key: string;
  value: string;
};

export type LoginResponse = SessionTokens & User;

export type SessionTokens = {
  token: string;
  refreshToken: string;
};

export type User = {
  id: string;
  email?: string;
};
