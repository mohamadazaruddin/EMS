import React from "react";
import { Icon, IconProps } from "@chakra-ui/react";
export default function NavTimeSheet({ ...rest }: IconProps) {
  return (
    <Icon
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M3 5H9V11H3V5ZM5 7V9H7V7H5ZM11 7H21V9H11V7ZM11 15H21V17H11V15ZM5 20L1.5 16.5L2.91 15.09L5 17.17L9.59 12.59L11 14L5 20Z"
        fill="currentColor"
      />
    </Icon>
  );
}
