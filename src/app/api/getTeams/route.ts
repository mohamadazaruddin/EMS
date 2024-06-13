import { NextRequest, NextResponse } from "next/server";
import { MyHTTPClient } from "../../services/httpClient/myHttpClient";

export async function GET(req: NextRequest, res: NextResponse) {
  const httpClient = new MyHTTPClient(req, res);
  const data = await httpClient.employees.GetTeams();

  return Response.json(data);
}
