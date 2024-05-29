import { extendTheme, ThemeConfig } from "@chakra-ui/react";

import { breakpoints } from "./foundations/breakpoints";
import { colors } from "./foundations/colors";
import styles from "./foundations/styles";

const config: ThemeConfig = {
  initialColorMode: "light",
};

const theme = extendTheme({
  config,
  fonts: {
    heading: "Roboto",
    body: "Roboto",
  },
  fontSizes: {
    tiny: "0.625rem",
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },

  lineHeights: {
    base: 1.2,
  },
  border: {
    defaultBorder: "1px solid #4d4d4d",
  },
  colors,
  accordianStyles: {
    borderTopStartRadius16: "16px",
    borderBottomStartRadius16: "16px",
    borderStart8: "8px",
  },
  breakpoints,
  styles,
  components: {},
});

export default theme;
