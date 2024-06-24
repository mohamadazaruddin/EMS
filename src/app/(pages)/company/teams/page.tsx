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
        px={4}
        w="100%"
        mt="3"
        border="1px solid #0000001A"
        borderRadius="6px"
      >
        {teamData && (
          <Grid templateColumns="repeat(4, 1fr)" gap={6}>
            {teamData?.map((item, i) => (
              <Flex
                py="2"
                key={i}
                justifyContent="center"
                alignItems="center"
                bg={item.id === teamId ? "#3BCBBE" : "#fff"}
                onClick={() => setTeamId(item.id)}
                cursor="pointer"
                borderRight={
                  i !== teamData?.length - 1 ? "2px solid #28D999" : "none"
                }
              >
                <GridItem
                  textAlign="center"
                  fontSize="sm"
                  fontWeight="medium"
                  color={item.id === teamId ? "#fff" : "#2C365C"}
                >
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
