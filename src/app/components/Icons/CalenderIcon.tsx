import React from "react";
import { Icon, IconProps } from "@chakra-ui/react";
export default function CalenderIcon({ ...rest }: IconProps) {
  return (
    <Icon
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M1.59583 3.6C1.59583 2.61 2.40583 1.8 3.39583 1.8H15.9958C16.4732 1.8 16.9311 1.98964 17.2686 2.32721C17.6062 2.66477 17.7958 3.12261 17.7958 3.6V16.2C17.7958 16.6774 17.6062 17.1352 17.2686 17.4728C16.9311 17.8104 16.4732 18 15.9958 18H3.39583C2.91844 18 2.4606 17.8104 2.12303 17.4728C1.78547 17.1352 1.59583 16.6774 1.59583 16.2V3.6ZM3.39583 5.4V16.2H15.9958V5.4H3.39583ZM5.19583 0H6.99583V1.8H5.19583V0ZM12.3958 0H14.1958V1.8H12.3958V0ZM5.19583 8.1H6.99583V9.9H5.19583V8.1ZM5.19583 11.7H6.99583V13.5H5.19583V11.7ZM8.79583 8.1H10.5958V9.9H8.79583V8.1ZM8.79583 11.7H10.5958V13.5H8.79583V11.7ZM12.3958 8.1H14.1958V9.9H12.3958V8.1ZM12.3958 11.7H14.1958V13.5H12.3958V11.7Z"
        fill="black"
      />
    </Icon>
  );
}
