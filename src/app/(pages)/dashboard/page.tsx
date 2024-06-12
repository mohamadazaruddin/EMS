"use client";
import { Box, VStack, Text, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { CardWithCount } from "../../components";
import {
  TotalEmpIcon,
  DepartmentIcon,
  NavCompany,
} from "../../components/Icons";
import EventCalender from "@/app/components/Calender/EventCalender";
import useSWR from "swr";
import { useSession } from "next-auth/react";

export default function Dashboard() {
  const { data: counts } = useSWR(`/api/getDashboardData`);
  const userData = useSession();

  const countData = [
    {
      icon: <TotalEmpIcon h="24px" w="24px" />,
      count: counts?.totalEmp,
      label: "Total Employees",
    },
    {
      icon: <DepartmentIcon h="24px" w="24px" />,
      count: counts?.totalDepartment,
      label: "Total Departments",
    },
    {
      icon: <NavCompany h="24px" w="24px" />,
      count: counts?.totalTeam,
      label: "Total Teams",
    },
    {
      icon: <NavCompany h="24px" w="24px" />,
      count: counts?.totalProject,
      label: "Total Projects",
    },
  ];

  return (
    <VStack mt="5">
      <Box w="100%">
        <Text
          fontSize="24px"
          color="brand.800"
          m="0"
          mb={1}
          fontWeight="medium"
        >
          Welcome, {userData.data?.user?.name}
        </Text>
        <Text color="#555D7B" fontSize="sm" m="0">
          we are happy to help your organization needs!
        </Text>
      </Box>
      <Grid templateColumns="repeat(4, 1fr)" gap={6} mt="3" w="100%">
        {countData.map((item, i) => {
          return (
            <GridItem key={i}>
              <CardWithCount
                icon={item.icon}
                count={item.count}
                label={item.label}
              />
            </GridItem>
          );
        })}
      </Grid>
      <Box w="100%" mt={8}>
        <Text
          fontSize="32px"
          color="brand.800"
          m="0"
          mb={4}
          fontWeight="medium"
        >
          Upcoming Events of Oct 2023
        </Text>
        <EventCalender />
      </Box>
    </VStack>
  );
}
