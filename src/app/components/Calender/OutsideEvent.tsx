import { Box, BoxProps } from "@chakra-ui/react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";

export default function OutsideEvent({ children, ...rest }: BoxProps) {
  return (
    <Box
      p={1}
      bg="#1b4e3f"
      color="white"
      cursor={"pointer"}
      style={{ border: "1px solid black" }}
      {...rest}
    >
      {children}
    </Box>
  );
}
