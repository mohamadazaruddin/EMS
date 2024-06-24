import { NextRequest, NextResponse } from "next/server";

import { MyHTTPClient } from "../../services/index";
import { UserData } from "../../services/types";

export async function POST(req: NextRequest, res: NextResponse) {
  const httpClient = new MyHTTPClient(req, res);
  const params = {
    data: (await req.json()) as UserData,
    id: Number(req.nextUrl.searchParams.get("id")),
  };

  const data = await httpClient.profile.PostProfileData(params);
  return Response.json(data);
}
