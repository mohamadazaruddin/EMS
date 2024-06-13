"use client";
import React from "react";
import { Avatar, Box, Flex, Image, Text } from "@chakra-ui/react";
import { useSession } from "next-auth/react";

export default function UserProfile() {
  const userData = useSession();
  return (
    <Flex alignItems="center">
      <Avatar size="sm" name="jessie" src="./images/peoples/jessie.svg" />
      <Box ms="2">
        <Text fontSize="sm" color="brand.800" fontWeight="normal">
          {userData.data?.user?.name}
        </Text>
        <Text fontSize="xs" fontWeight="normal" color="#00000099">
          UI Developer
        </Text>
      </Box>
    </Flex>
  );
}
