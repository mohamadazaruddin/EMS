import ky from "ky";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import { Login } from "../auth";
import { ApiHandler, MyClientOptions } from "../types";
import { IncomingMessage, ServerResponse } from "http";
import { GetData, PostTaskData, GetOptions, GetDashboardCount } from "../";
import { GetTeams } from "../employees/getTeams";
import { GetEmployeesData } from "../employees/getEmployeesData";
import { GetRole } from "../employees/getRoles";
import { PostProfileData, GetProfileData } from "../index";

export class MyHTTPClient {
  public auth;
  public dashboard;
  public employees;
  public timesheet;
  public profile;

  constructor(
    req?: NextRequest | IncomingMessage,
    _res?: NextResponse | ServerResponse,
    opts: MyClientOptions = {
      authRequired: true,
      additionalHeader: [],
    }
  ) {
    const baseUrl = process.env.NEXT_BASE_URL;

    const baseHttpClient = ky.create({
      prefixUrl: baseUrl,
      retry: 0,
      timeout: 20000,
      hooks: {
        beforeRequest: [
          async (request) => {
            request.headers.set("Content-type", `application/json`);
            if (!opts.authRequired) {
              return;
            }
            const token = await getToken({ req: req as NextRequest });
            if (!token) {
              throw new Error("missing valid session");
            }

            request.headers.set("Authorization", `Bearer ${token.token}`);

            if (opts.additionalHeader?.length) {
              opts.additionalHeader?.map(({ key, value }) => {
                request.headers.set(key, value);
              });
            }
          },
        ],
        afterResponse: [
          async (_input, _options, response) => {
            if (response.status === 403 || response.status === 401) {
              //TODO: Refresh Token Logic needs to be implemented
              throw new Error("missing valid session");
            }
          },
        ],
      },
    });

    const withApiClient =
      <T, U>(handler: ApiHandler<T, U>) =>
      async (params: U = {} as U): Promise<T> => {
        return handler(baseHttpClient, params);
      };

    this.auth = {
      login: withApiClient(Login),
    };
    this.dashboard = {
      GetDashboardCount: withApiClient(GetDashboardCount),
    };
    this.timesheet = {
      GetData: withApiClient(GetData),
      PostTaskData: withApiClient(PostTaskData),
      GetOptions: withApiClient(GetOptions),
    };
    this.employees = {
      GetTeams: withApiClient(GetTeams),
      Roles: withApiClient(GetRole),
      EmpData: withApiClient(GetEmployeesData),
    };
    this.profile = {
      PostProfileData: withApiClient(PostProfileData),
      GetProfileData: withApiClient(GetProfileData),
    };
  }
}
