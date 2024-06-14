"use client";
import { Box, VStack, HStack, Image } from "@chakra-ui/react";
import React from "react";
import { usePathname } from "next/navigation";
import { Loader } from "../Icons";
import Skelton from "./Skelton";

export default function PageLayout({
  children,
  isLoading,
}: {
  children: React.ReactNode;
  isLoading: boolean;
}) {
  const pathname = usePathname();
  return (
    <>
      {!isLoading ? (
        children
      ) : (
        <Box h="100%" display="flex">
          <Skelton />
        </Box>
      )}
    </>
  );
}
