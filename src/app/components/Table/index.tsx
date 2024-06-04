import { Grid, GridItem, HStack, VStack } from "@chakra-ui/react";
import React from "react";

type DesktopTable = {
  tableHeader?: TableHeaderType[];
  tableBodyData?: [
    {
      value: string;
      colspan?: number;
      style: {};
      labelColor?: string;
    }
  ];
  tableGridSize: number;
  isHeader?: boolean;
};

type bodyType = {
  id: number;
  date: string;
  task: string;
  project: string;
  estimation: number;
  completed: number;
  remaining: number;
};

type TableHeaderType = {
  headerSize: number;
  label: string;
  colspan?: number;
  style: {};
};

export default function Table({
  tableHeader,
  tableBodyData,
  tableGridSize,
  isHeader,
}: DesktopTable) {
  return (
    <VStack w="100%">
      {isHeader && (
        <Grid
          templateColumns={`repeat(${tableGridSize ? tableGridSize : 16}, 1fr)`}
          w="100%"
          p={6}
          bg="#fff"
          borderRadius="8px"
        >
          {tableHeader?.map((header, i) => {
            return (
              <GridItem colSpan={header.colspan ? header.colspan : 2} key={i}>
                {header.label}
              </GridItem>
            );
          })}
          <GridItem colSpan={2}>Date</GridItem>
          <GridItem colSpan={5}>Task</GridItem>
          <GridItem colSpan={3}>Project</GridItem>
          <GridItem colSpan={2}>Estimated</GridItem>
          <GridItem colSpan={2}>Completed</GridItem>
          <GridItem colSpan={2}>Remaining</GridItem>
        </Grid>
      )}

      <Grid
        templateColumns="repeat(16, 1fr)"
        w="100%"
        py={3}
        px={6}
        bg="#fff"
        borderRadius="8px"
      >
        <GridItem colSpan={2}>16 Oct 2023</GridItem>
        <GridItem colSpan={5}>
          ui development of header and journey component....
        </GridItem>
        <GridItem colSpan={3}>Arya Exports</GridItem>
        <GridItem colSpan={2}>9</GridItem>
        <GridItem colSpan={2}>6</GridItem>
        <GridItem colSpan={2}>3</GridItem>
      </Grid>
    </VStack>
  );
}
