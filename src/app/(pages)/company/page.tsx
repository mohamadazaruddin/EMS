"use client";
import React, { useEffect, useState } from "react";
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
import useSWRImmutable from "swr/immutable";
import TreeChart from "@/app/components/Common/TreeChart";
import useSWR from "swr";

export default function Company() {
  const [orgData, setOrgData] = useState();
  const { data: teamData } = useSWRImmutable(
    "https://ems-be-xxuk.onrender.com/team"
  );
  const { data: empData } = useSWR(
    "https://ems-be-xxuk.onrender.com/employees"
  );

  useEffect(() => {
    if (empData) {
      const org = empData?.forEach((obj: { parentId: string | number }) => {
        if (obj.parentId === 0) {
          obj.parentId = "";
        }
      });
      console.log(empData, "org");

      setOrgData(org);
    }
  }, [empData]);

  return (
    <VStack w="100%">
      {/* <Box
        bg="#fff"
        p={4}
        w="100%"
        mt="4"
        border="1px solid #0000001A"
        borderRadius="6px"
      >
        {teamData && (
          <Grid templateColumns="repeat(4, 1fr)" gap={6}>
            {teamData?.map((team, i) => {
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
                    {team.teamName}
                  </GridItem>
                </Flex>
              );
            })}
          </Grid>
        )}
      </Box> */}

      <Box w="full">
        <TreeChart data={orgData} />
      </Box>
    </VStack>
  );
}
