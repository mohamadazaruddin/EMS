import React from "react";
import { Icon, IconProps } from "@chakra-ui/react";
export default function Delete({ ...rest }: IconProps) {
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
        d="M4.08337 12.25C3.76254 12.25 3.48779 12.1357 3.25912 11.907C3.03046 11.6783 2.91632 11.4038 2.91671 11.0833V3.5H2.33337V2.33333H5.25004V1.75H8.75004V2.33333H11.6667V3.5H11.0834V11.0833C11.0834 11.4042 10.969 11.6789 10.7404 11.9076C10.5117 12.1362 10.2372 12.2504 9.91671 12.25H4.08337ZM9.91671 3.5H4.08337V11.0833H9.91671V3.5ZM5.25004 9.91667H6.41671V4.66667H5.25004V9.91667ZM7.58337 9.91667H8.75004V4.66667H7.58337V9.91667Z"
        fill="#C40C0C"
      />
    </Icon>
  );
}
