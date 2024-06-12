import ky from "ky";

import { postTaskPayload } from "../../services/types";

export const PostTaskData = async (
  httpClient: typeof ky,
  params: { data: postTaskPayload }
) => {
  const response = await httpClient
    .post(`timesheet`, {
      json: params.data,
    })
    .json();
  return response;
};
