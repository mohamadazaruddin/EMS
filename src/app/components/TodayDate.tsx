import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { CalenderIcon } from "@/app/components/Icons";

export default function TodayDate() {
  const today = new Date();

  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  };

  const formattedDate = today.toLocaleDateString("en-GB", options);
  return (
    <Flex bg="#F2F2FD" borderRadius="16px" p="4" ps="6">
      <CalenderIcon />
      <Text ms="2" color="#111111" fontSize="sm" fontWeight="medium">
        {formattedDate}
      </Text>
    </Flex>
  );
}
