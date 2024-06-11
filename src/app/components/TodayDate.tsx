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
    <Flex bg="#F2F2FD" borderRadius="16px" px="3" py="1" align="center">
      <CalenderIcon w="3.5" h="3.5" />
      <Text ms="2" color="#111111" fontSize="xs" fontWeight="medium">
        {formattedDate}
      </Text>
    </Flex>
  );
}
