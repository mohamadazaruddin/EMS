import ky from "ky";
export const GetOptions = async (
  httpClient: typeof ky,
  params: { type: string }
) => {
  if (params.type === "projects") {
    const response = await httpClient.get(`project`).json();
    return response;
  } else if (params.type === "roles") {
    const response = await httpClient.get(`role`).json();
    return response;
  } else if (params.type === "teams") {
    const response = await httpClient.get(`team`).json();
    return response;
  }
};
