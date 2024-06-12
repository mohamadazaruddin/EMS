"use client";
import { SessionProvider as Provider } from "next-auth/react";
import React from "react";

/**
 * Provides a session context for authentication using NextAuth.
 * Wraps the children components with the session provider.
 * @param children - The child components to be wrapped.
 */
export default function SessionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Wraps the provided children with the NextAuth SessionProvider
  return <Provider>{children}</Provider>;
}
