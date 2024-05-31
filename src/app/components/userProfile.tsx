import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

export default function UserProfile() {
  return (
    <Flex alignItems="center">
      <Image src="./Images/profile.png" borderRadius="50%" h="35px" w="35px" />
      <Box ms="2">
        <Text>Mohamad Azaruddin</Text>
        <Text>UI Developer</Text>
      </Box>
    </Flex>
  );
}
