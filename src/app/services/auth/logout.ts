import ky from "ky";
export const Logout = async (httpClient: typeof ky) => {
  try {
    // const response = await httpClient.post(`auth/logout`).json();

    return { sucess: "true" };
  } catch (error) {}
};
