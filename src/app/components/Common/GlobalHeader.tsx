import {
  HStack,
  Flex,
  Divider,
  InputGroup,
  Input,
  InputRightElement,
  Box,
} from "@chakra-ui/react";
import React from "react";
import { SearchIcon } from "../Icons";
import TodayDate from "../TodayDate";
import UserProfile from "../userProfile";

export default function GlobalHeader() {
  return (
    <HStack bg="#fff" px={4} py="3" w="100%" justifyContent="space-between">
      <Flex>
        <UserProfile />
        <Divider
          orientation="vertical"
          color="#E1E1FF"
          borderColor="#E1E1FF"
          h="30px"
          mx={4}
        />
        <TodayDate />
      </Flex>

      <Box>
        <InputGroup bg="#F2F2FD" borderRadius="16px" w="400px">
          <Input
            placeholder="Search Employee"
            h="34px"
            _placeholder={{
              fontSize: "xs",
            }}
          />
          <InputRightElement>
            <SearchIcon h="18px" w="18px" top="-3px" />
          </InputRightElement>
        </InputGroup>
      </Box>
    </HStack>
  );
}
