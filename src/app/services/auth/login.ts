import ky from "ky";

import { LoginParamsType, LoginResponse } from "../types";

export const Login = async (httpClient: typeof ky, params: LoginParamsType) => {
  try {
    console.log(
      params.username,
      params.password,
      "email: params.username, password: params.password "
    );
    const response = await httpClient
      .post("auth/login", {
        json: { email: "Maxwell@abc.com", password: "Maxwell@123" },
      })
      .json<LoginResponse>();

    return response;
  } catch (error) {
    console.log(error, "----");
  }
};
