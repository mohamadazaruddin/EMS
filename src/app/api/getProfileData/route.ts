import { NextRequest, NextResponse } from "next/server";
import { MyHTTPClient } from "../../services/httpClient/myHttpClient";

export async function GET(req: NextRequest, res: NextResponse) {
  const httpClient = new MyHTTPClient(req, res);

  const data = await httpClient.profile.GetProfileData({
    id: Number(req.nextUrl.searchParams.get("id")),
  });

  return Response.json(data);
}
