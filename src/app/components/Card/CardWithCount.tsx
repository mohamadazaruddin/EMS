import React, { ReactNode } from "react";
import BasicCard from ".";
import { Text, Box } from "@chakra-ui/react";

type CradWithCountProps = {
  icon: ReactNode;
  count: String;
  label: String;
};

export default function CardWithCount({
  icon,
  count,
  label,
}: CradWithCountProps) {
  return (
    <BasicCard bg="#FFFFFF" p="4">
      {icon}
      <Text fontSize="6xl" color="#091641" fontFamily="bold">
        {count}
      </Text>
      <Box fontSize="2xl" color="#2C365C" fontFamily="medium">
        <Text>{label.split(" ")[0]}</Text>
        <Text>{label.split(" ")[1]}</Text>
      </Box>
    </BasicCard>
  );
}
