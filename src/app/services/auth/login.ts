import ky from "ky";

import { LoginParamsType } from "../../services/types";

export const Login = async (httpClient: typeof ky, params: LoginParamsType) => {
  try {
    const response = await httpClient
      .post("auth/login", {
        json: { email: params.username, password: params.password },
      })
      .json();
    return response;
  } catch (error) {
    console.log(error, "error");
  }
};
