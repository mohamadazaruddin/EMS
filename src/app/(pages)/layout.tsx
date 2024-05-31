import { Box } from "@chakra-ui/react";
import React from "react";
import Sidebar from "@/app/components/Common/Sidebar";

export function CustomLayout() {
  return (
    <Box bg="#F7F8FA" h="100%" w="100%">
      <Sidebar />
    </Box>
  );
}

export default CustomLayout;
