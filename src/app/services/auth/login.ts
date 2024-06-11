import ky from "ky";

import { LoginParamsType } from "../../services/types";

export const Login = async (httpClient: typeof ky, params: LoginParamsType) => {
  try {
    console.log("innnnsev serv");
    const response = await httpClient
      .post("auth/login", {
        json: { email: "Maxwell@abc.com", password: "Maxwell@123" },
      })
      .json();
    console.log(response, "response");
    return response;
  } catch (error) {
    console.log(error, "error");
  }
};
