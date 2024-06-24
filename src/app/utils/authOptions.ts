import type {
  AuthOptions as AuthOptionsType,
  RequestInternal,
  User,
} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { MyHTTPClient } from "../services";
import { NextApiRequest } from "next";
interface AuthenticationResponse {
  email: string;
  accessToken: string;
  id: number;
  firstname: string;
  lastname: string;
  profileImage: string;
}
export const AuthOptions: AuthOptionsType = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(
        credentials: any,
        req: Pick<RequestInternal, "body" | "query" | "headers" | "method">
      ): Promise<any> {
        try {
          const httpClient = new MyHTTPClient(undefined, undefined, {
            authRequired: false,
          });
          if (credentials) {
            const response = (await httpClient.auth.login({
              username: credentials.username,
              password: credentials.password,
            })) as AuthenticationResponse;

            if (response) {
              return {
                id: response?.id,
                accessToken: response.accessToken,
                email: response.email,
                firstname: response.firstname,
                lastname: response.lastname,
                profileImage: response.profileImage,
              };
            } else {
              throw new Error("Invalid username or password");
            }
          }
        } catch (error) {
          return null;
        }
      },
    }),
  ],

  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  session: {
    strategy: "jwt",
    maxAge: 36000,
  },
  pages: {
    signIn: "/",
  },
  callbacks: {
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          name: token.name,
          email: token.email,
          accessToken: token.accessToken,
          profileImage: token.profileImage,
        },
      };
    },
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          id: user.id,
          name: user.firstname,
          email: user.email,
          accessToken: user.accessToken,
          profileImage: user.profileImage,
        };
      }
      return token;
    },
  },
};
/**
 * Paths accessible to doctor.
 */
export const doctorPaths = ["/dashboard"];
/**
 * Paths accessible to patient.
=
/**
 * Paths that are part of the public API and do not require authentication.
 */
export const publicApiRoutes = ["/"];

/**
 * Determines whether a user with a specific role has access to a given path.
 *
 * @param {UserRole} role - User's role.
 * @param {string} pathName - Path to check access for.
 * @returns {boolean} - True if the user has access, false otherwise.
 */
// export const AuthProtector = (pathName: string): boolean => {
//   if (pathName === "/login" || pathName === "/patient-login") {
//     return true;
//   }

//   if (pathName === "/dashboard") {
//     return true;
//   }

//   return false;
// };
