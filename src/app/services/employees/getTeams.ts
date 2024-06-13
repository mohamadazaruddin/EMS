import ky from "ky";
export const GetTeams = async (httpClient: typeof ky) => {
  const response = await httpClient.get(`team`).json();
  return response;
};
