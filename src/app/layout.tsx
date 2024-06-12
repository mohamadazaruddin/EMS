"use client";
import CustomChakraProvider from "./components/CustomChakraProvider";
import { Inter } from "next/font/google";
import "./globals.css";
import { SWRConfig } from "swr";
import { SessionProvider } from "./context";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fetcher = async (url: string | URL | Request) => {
    const res = await fetch(url);

    // If the status code is not in the range 200-299,
    // we still try to parse and throw it.
    if (!res.ok) {
      const error = new Error("An error occurred while fetching the data.");
      // Attach extra info to the error object.

      throw error;
    }

    return res.json();
  };
  return (
    <html lang="en">
      <head>
        <title>EMS</title>
        <link rel="icon" href="/images/favicon.ico" />
      </head>
      <body className={inter.className}>
        <SessionProvider>
          <SWRConfig
            value={{
              fetcher,
            }}
          >
            <CustomChakraProvider>{children}</CustomChakraProvider>
          </SWRConfig>
        </SessionProvider>
      </body>
    </html>
  );
}
