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
      <Text fontSize="48px" color="#091641" fontFamily="bold" mt="2">
        {count}
      </Text>
      <Box fontSize="lg" color="#2C365C" fontFamily="bold">
        <Text>{label.split(" ")[0]}</Text>
        <Text>{label.split(" ")[1]}</Text>
      </Box>
    </BasicCard>
  );
}
