import React from "react";
import { Icon, IconProps } from "@chakra-ui/react";
export default function Add({ ...rest }: IconProps) {
  return (
    <Icon
      width="29"
      height="29"
      viewBox="0 0 29 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M13.2164 15.6H6.01636V13.2H13.2164V6H15.6164V13.2H22.8164V15.6H15.6164V22.8H13.2164V15.6Z"
        fill="white"
      />
    </Icon>
  );
}
