import type { AuthOptions as AuthOptionsType } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { MyHTTPClient } from "./../services/httpClient/myHttpClient";

export const AuthOptions: AuthOptionsType = {
  providers: [
    CredentialsProvider({
      id: "Credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any) {
        console.log("----");
        console.log(credentials, "credentials");
        const httpClient = new MyHTTPClient(undefined, undefined, {
          authRequired: false,
        });
        const response = await httpClient.auth.login({
          username: credentials.email,
          password: credentials.password,
        });
        if (response) {
          return {
            id: response?.id,
            token: response?.token,
          };
        } else {
          throw new Error("Invalid username or password");
        }
      },
    }),
  ],
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  session: {
    strategy: "jwt",
    maxAge: 3600,
  },
  pages: {
    signIn: "/",
  },
  callbacks: {
    async jwt({ token, user }) {
      return user ? { ...token, ...user } : token;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          name: token.name,
        },
      };
    },
  },
};

// Define other constants here...
