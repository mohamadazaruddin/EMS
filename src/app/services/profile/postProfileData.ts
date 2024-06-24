import ky from "ky";

import { UserData } from "../../services/types";

export const PostProfileData = async (
  httpClient: typeof ky,
  params: { data: UserData; id: number }
) => {
  const response = await httpClient
    .put(`employees/${params.id}`, {
      json: params.data,
    })
    .json();
  return response;
};
