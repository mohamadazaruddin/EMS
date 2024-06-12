import ky from "ky";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import { Login } from "../auth";
import { ApiHandler, MyClientOptions } from "../types";
import { IncomingMessage, ServerResponse } from "http";

export class MyHTTPClient {
  public auth;

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
  }
}
