import ky from "ky";
export const GetEmployeesData = async (
  httpClient: typeof ky,
  params: { teamId: number | null; roleId: number | null }
) => {
  console.log(params.teamId, params.roleId, "role");

  const response = await httpClient
    .get(`employees?team=${params.teamId}&role=${params.roleId}`)
    .json();
  console.log(response, "red");

  return response;
};
