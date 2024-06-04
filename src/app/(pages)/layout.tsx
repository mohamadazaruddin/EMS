"use client";
import { Box, VStack, HStack } from "@chakra-ui/react";
import React from "react";
import Sidebar from "@/app/components/Common/Sidebar";

export default function CustomLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box bg="#F7F8FA" h="100%" w="100%">
      <HStack>
        <Sidebar />
        <Box ms="250px" w="100%">
          {children}
        </Box>
      </HStack>
    </Box>
  );
}
