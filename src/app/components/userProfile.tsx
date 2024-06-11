import React from "react";
import { Avatar, Box, Flex, Image, Text } from "@chakra-ui/react";

export default function UserProfile() {
  return (
    <Flex alignItems="center">
      <Avatar size="sm" name="jessie" src="./Images/peoples/jessie.svg" />
      <Box ms="2">
        <Text fontSize="sm" color="brand.800" fontWeight="normal">
          Mohamad Azaruddin
        </Text>
        <Text fontSize="xs" fontWeight="normal">
          UI Developer
        </Text>
      </Box>
    </Flex>
  );
}
