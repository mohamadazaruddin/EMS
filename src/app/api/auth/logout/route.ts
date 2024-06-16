import { NextRequest, NextResponse } from "next/server";

import { MyHTTPClient } from "../../../services/httpClient/myHttpClient";

export async function POST(req: NextRequest, res: NextResponse) {
  const httpClient = new MyHTTPClient(req, res);
  const data = await httpClient.auth.logout();

  return Response.json(data);
}
