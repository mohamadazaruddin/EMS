import ky from "ky";

import { editProfile } from "../../services/types";

export const PostProfileData = async (
  httpClient: typeof ky,
  params: { data: editProfile }
) => {
  // const response = await httpClient
  //   .post(`timesheet`, {
  //     json: params.data,
  //   })
  //   .json();
  //   return response;
  return {
    firstName: "Nishi",
    lastName: "Gawas",
    role: 1,
    team: 2,
    email: "gawas@g.com",
    contact: "8108307952",
  };
};
