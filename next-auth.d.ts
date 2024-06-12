// next-auth.d.ts
import NextAuth from "next-auth";
import { JWT as NextAuthJWT } from "next-auth/jwt";
import { Session as NextAuthSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      accessToken: string;
      firstname: string;
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    email: string;
    accessToken: string;
    firstname: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    email: string;
    accessToken: string;
  }
}
