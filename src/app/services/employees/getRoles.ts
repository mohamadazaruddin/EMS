import ky from "ky";
export const GetRole = async (httpClient: typeof ky) => {
  const response = await httpClient.get(`role`).json();
  return response;
};
