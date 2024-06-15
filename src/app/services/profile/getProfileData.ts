import ky from "ky";
export const GetProfileData = async (
  httpClient: typeof ky,
  params: { id: number }
) => {
  // const response = await httpClient.get(`timesheet/${params.id}`).json();
  return {
    firstName: "Nishi",
    lastName: "Gawas",
    role: 1,
    team: 2,
    email: "gawas@g.com",
    contact: "8108307952",
  };
};
