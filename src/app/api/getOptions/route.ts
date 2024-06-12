import { NextRequest, NextResponse } from "next/server";
import { MyHTTPClient } from "../../services/httpClient/myHttpClient";

export async function GET(req: NextRequest, res: NextResponse) {
  const httpClient = new MyHTTPClient(req, res);
  const data = await httpClient.timesheet.GetOptions({
    type: req.nextUrl.searchParams.get("type") || "",
  });

  return Response.json(data);
}
