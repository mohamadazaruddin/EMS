"use client";
import { Box, VStack, HStack } from "@chakra-ui/react";
import React from "react";
import Sidebar from "@/app/components/Common/Sidebar";
import { GlobalHeader } from "../components";

export default function CustomLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box bg="#F7F8FA" h="100vh" overflowY="auto" w="100%">
      <HStack>
        <Sidebar />
        <Box ms="250px" w="100%" p="6">
          <GlobalHeader />
          {children}
        </Box>
      </HStack>
    </Box>
  );
}
