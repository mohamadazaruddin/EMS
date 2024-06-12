"use client";
import { Box, VStack, HStack } from "@chakra-ui/react";
import React from "react";
import Sidebar from "@/app/components/Common/Sidebar";
import { GlobalHeader } from "../components";
import { usePathname } from "next/navigation";

export default function CustomLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <Box bg="#F7F8FA" h="100vh" overflowY="auto" w="100%">
      <HStack>
        <Sidebar />
        <Box ms="250px" w="100%" p="6">
          {!pathname.toLowerCase().includes("edit") && <GlobalHeader />}
          {children}
        </Box>
      </HStack>
    </Box>
  );
}
