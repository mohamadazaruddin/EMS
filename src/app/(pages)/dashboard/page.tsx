import { Box, VStack, Text, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { CardWithCount } from "../../components";
import {
  TotalEmpIcon,
  DepartmentIcon,
  NavCompany,
} from "../../components/Icons";
import EventCalender from "@/app/components/Calender/EventCalender";

export default function Dashboard() {
  const countData = [
    {
      icon: <TotalEmpIcon h="36px" w="36px" />,
      count: "45",
      label: "Total Employees",
    },
    {
      icon: <DepartmentIcon h="36px" w="36px" />,
      count: "4",
      label: "Total Departments",
    },
    {
      icon: <NavCompany h="36px" w="36px" />,
      count: "5",
      label: "Total Teams",
    },
    {
      icon: <NavCompany h="36px" w="36px" />,
      count: "45",
      label: "Total Projects",
    },
  ];

  return (
    <VStack p="10">
      <Box w="100%">
        <Text fontSize="4xl" color="primary.200" mb={2} fontWeight="medium">
          Welcome, Azar
        </Text>
        <Text color="#555D7B" fontSize="lg">
          we are happy to help your organization needs!
        </Text>
      </Box>
      <Grid templateColumns="repeat(4, 1fr)" gap={6} mt="4" w="100%">
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
      <Box w="100%" mt={10}>
        <EventCalender />
      </Box>
    </VStack>
  );
}
