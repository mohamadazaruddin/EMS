import ky from "ky";
export const GetDashboardCount = async (httpClient: typeof ky) => {
  const response = await httpClient.get(`employees/dashboard`).json();
  return response;
};
