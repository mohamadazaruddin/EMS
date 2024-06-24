import ky from "ky";
export const GetProfileData = async (
  httpClient: typeof ky,
  params: { id: number }
) => {
  const response = await httpClient.get(`employees/${params.id}`).json();
  return response;
};
