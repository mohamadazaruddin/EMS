import type { AuthOptions as AuthOptionsType } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { MyHTTPClient } from "../services";
interface AuthenticationResponse {
  email: string; // Assuming email is a string
  accessToken: string; // Assuming accessToken is a string
  // Add any other properties if present in the actual response
}
export const AuthOptions: AuthOptionsType = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any) {
        console.log("try", "trytry");
        try {
          const httpClient = new MyHTTPClient(undefined, undefined, {
            authRequired: false,
          });

          const response = (await httpClient.auth.login({
            username: credentials.username,
            password: credentials.password,
          })) as AuthenticationResponse;

          if (response) {
            console.log(response, "responseresponse");
            // Assuming your server returns a token
            return {
              id: response?.email,
              token: response?.accessToken,
            };
          } else {
            // Authentication failed
            throw new Error("Invalid username or password");
          }
        } catch (error) {
          console.error("Authentication error:", error);
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
      console.log("Session callback:", { session, token });
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          name: token.name,
          email: token.email,
          accessToken: token.accessToken,
        },
      };
    },
    async jwt({ token, user }) {
      // Merge user information into the token
      if (user) {
        console.log("if JWT callback:", { token, user });
        return {
          ...token,
          id: user.email,
          name: user.email,
          email: user.email,
          accessToken: user.token,
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
