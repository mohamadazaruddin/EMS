import React from "react";
import {
  Box,
  VStack,
  HStack,
  Flex,
  Image,
  Text,
  Divider,
  InputGroup,
  Input,
  InputRightElement,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { TodayDate, UserProfile } from "@/app/components";
import { CalenderIcon, SearchIcon } from "@/app/components/Icons";

export default function Company() {
  const teams = [
    "Quantum Leapers",
    "Innovative Falcon",
    "NextTech Titans",
    "Cyber Ducks",
  ];
  return (
    <VStack w="100%" p={6}>
      <HStack bg="#fff" p={6} w="100%" justifyContent="space-between">
        <Flex>
          <UserProfile />
          <Divider
            orientation="vertical"
            color="#E1E1FF"
            borderColor="#E1E1FF"
            h="50px"
            mx={4}
          />
          <TodayDate />
        </Flex>

        <Box>
          <InputGroup bg="#F2F2FD" borderRadius="16px" w="400px">
            <Input placeholder="Search Employee" />
            <InputRightElement>
              <SearchIcon h="24px" w="24px" />
            </InputRightElement>
          </InputGroup>
        </Box>
      </HStack>
      <Box
        bg="#fff"
        p={4}
        w="100%"
        mt="4"
        border="1px solid #0000001A"
        borderRadius="6px"
      >
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          {teams.map((team, i) => {
            return (
              <Flex
                key={i}
                justifyContent="center"
                alignItems="center"
                borderRight={
                  i !== teams.length - 1 ? "2px solid #28D999" : "none"
                }
              >
                <GridItem
                  textAlign="center"
                  fontSize="md"
                  fontWeight="normal"
                  color="#555D7B"
                >
                  {team}
                </GridItem>
              </Flex>
            );
          })}
        </Grid>
      </Box>
    </VStack>
  );
}
