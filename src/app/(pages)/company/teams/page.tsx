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
interface TeamType {
  teamName: string;
  id: number;
}
export default function Company() {
  const { data: teamData } = useSWR<TeamType[]>(`/api/getTeams`);
  const [teamId, setTeamId] = useState((teamData && teamData[0].id) || 0);

  const { data: empData } = useSWR(
    `/api/getEmployees?teamId=${teamId}&roleId=`
  );

  useEffect(() => {
    if (teamData) {
      setTeamId(teamData[0].id);
    }
  }, [teamData]);

  return (
    <VStack w="100%">
      <Box
        bg="#fff"
        w="100%"
        mt="3"
        border="1px solid #0000001A"
        borderRadius="6px"
      >
        {teamData && (
          <Grid templateColumns="repeat(4, 1fr)" gap={6} p={2}>
            {teamData?.map((item, i) => (
              <Flex
                py="2"
                key={i}
                justifyContent="center"
                alignItems="center"
                color={item.id === teamId ? "#17234D" : "#555D7B"}
                onClick={() => setTeamId(item.id)}
                cursor="pointer"
                fontWeight={item.id === teamId ? "bold" : "normal"}
                borderRight={
                  i !== teamData?.length - 1 ? "2px solid #28D999" : "none"
                }
                textTransform="capitalize"
              >
                <GridItem textAlign="center" fontSize="sm">
                  {item.teamName}
                </GridItem>
              </Flex>
            ))}
          </Grid>
        )}
      </Box>

      <Box w="full">{empData && teamData && <TreeChart data={empData} />}</Box>
    </VStack>
  );
}
