import { GlobalStyleProps, mode } from "@chakra-ui/theme-tools";

// Global style overrides.
const styles = {
  global: (props: GlobalStyleProps) => {
    return {
      html: {
        height: "100%",
      },
      "#__next": {
        display: "flex",
        flexDirection: "column",
        height: "100%",
      },
      main: {
        flex: "1 0 auto",
      },
      // Scrollbars.
      "*::-webkit-scrollbar": {
        width: "4px",
        height: "6px",
      },
      "*::-webkit-scrollbar-track": {
        background: "#F8F9FE",
      },
      "::-webkit-scrollbar-thumb": {
        background: "#240090",
      },
      "::-webkit-scrollbar-corner": {
        background: "transparent",
      },
      // input placeholder style
      "::-webkit-input-placeholder": {
        color: "gray.500",
        overflow: "visible",
      },
      body: {
        height: "100%",
        color: mode("gray.700", "gray.800")(props),
        background: mode("white", "contrast.200")(props),
        lineHeight: 1.2,
        fontFamily: "Inter",
      },
      a: {
        color: "primary.500",
        textDecoration: "underline",
      },
      // Used to flex ModalFooter style.
      ".chakra-portal": {
        display: "flex",
        flex: 1,
      },

      ".chakra-radio__label": { display: "inline-block" },
    };
  },
};

export default styles;
