import { NextRequest, NextResponse } from "next/server";

import { MyHTTPClient } from "../../services/index";
import { editProfile } from "../../services/types";

export async function POST(req: NextRequest, res: NextResponse) {
  const httpClient = new MyHTTPClient(req, res);
  const params = {
    data: (await req.json()) as editProfile,
  };

  const data = await httpClient.profile.PostProfileData(params);
  return Response.json(data);
}
