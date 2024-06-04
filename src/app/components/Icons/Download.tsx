import React from "react";
import { Icon, IconProps } from "@chakra-ui/react";
export default function Download({ ...rest }: IconProps) {
  return (
    <Icon
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M7.00004 9.33301L4.08337 6.41634L4.90004 5.57051L6.41671 7.08717V2.33301H7.58337V7.08717L9.10004 5.57051L9.91671 6.41634L7.00004 9.33301ZM3.50004 11.6663C3.17921 11.6663 2.90446 11.552 2.67579 11.3233C2.44712 11.0947 2.33299 10.8201 2.33338 10.4997V8.74967H3.50004V10.4997H10.5V8.74967H11.6667V10.4997C11.6667 10.8205 11.5524 11.0953 11.3237 11.3239C11.095 11.5526 10.8205 11.6667 10.5 11.6663H3.50004Z"
        fill="#0A47E5"
      />
    </Icon>
  );
}
