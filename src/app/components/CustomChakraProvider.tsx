import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";

import baseTheme from "../styles/theme";

const CustomChakraProvider = ({ children }: { children: React.ReactNode }) => {
  const theme = extendTheme(baseTheme);

  return (
    <ChakraProvider resetCSS theme={theme}>
      {children}
    </ChakraProvider>
  );
};

export default CustomChakraProvider;
