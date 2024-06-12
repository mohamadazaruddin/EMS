import { NextRequest, NextResponse } from "next/server";

import { MyHTTPClient } from "../../../services/httpClient/myHttpClient";
import { postTaskPayload } from "../../../services/types";

export async function POST(req: NextRequest, res: NextResponse) {
  const httpClient = new MyHTTPClient(req, res);
  const params = {
    data: (await req.json()) as postTaskPayload,
  };

  const data = await httpClient.timesheet.PostTaskData(params);
  return Response.json(data);
}
