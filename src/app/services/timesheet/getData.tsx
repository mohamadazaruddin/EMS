import ky from "ky";
export const GetData = async (
  httpClient: typeof ky,
  params: { id: number }
) => {
  const response = await httpClient.get(`timesheet/${params.id}`).json();
  return response;
};
