import { NextRequest, NextResponse } from "next/server";
import { MyHTTPClient } from "../../services/httpClient/myHttpClient";

export async function GET(req: NextRequest, res: NextResponse) {
  const httpClient = new MyHTTPClient(req, res);
  const data = await httpClient.employees.EmpData({
    teamId: Number(req.nextUrl.searchParams.get("teamId")),
    roleId: Number(req.nextUrl.searchParams.get("roleId")),
  });

  return Response.json(data);
}
