"use client";
import TreeChart from "@/app/components/Common/TreeChart";
import { VStack, Box } from "@chakra-ui/react";
import React from "react";
import useSWR from "swr";

export default function Org() {
  const { data: empData } = useSWR(`/api/getEmployees?teamId=&roleId=`);
  return (
    <VStack w="100%">
      <Box w="full">{empData && <TreeChart data={empData} />}</Box>
    </VStack>
  );
}
