import { Grid, GridItem, VStack } from "@chakra-ui/react";
import React from "react";

type TableProps = {
  tableHeader?: { label: string; colspan?: number }[];
  tableBodyData?: { value: string | number; colspan?: number }[][];
  tableGridSize: number;
  isHeader?: boolean;
};

const Table: React.FC<TableProps> = ({
  tableHeader,
  tableBodyData,
  tableGridSize,
  isHeader,
}) => (
  <VStack w="100%" align="stretch">
    {isHeader && (
      <Grid
        templateColumns={`repeat(${tableGridSize}, 1fr)`}
        gap={2}
        w="100%"
        p={4}
        bg="#fff"
        borderRadius="8px"
      >
        {tableHeader?.map((header, index) => (
          <GridItem
            key={index}
            colSpan={header.colspan || 1}
            color="#17234D"
            fontWeight="bold"
            fontSize="18px"
          >
            {header.label}
          </GridItem>
        ))}
      </Grid>
    )}

    {tableBodyData?.map((row, rowIndex) => (
      <Grid
        key={rowIndex}
        templateColumns={`repeat(${tableGridSize ? tableGridSize : 16}, 1fr)`}
        gap={2}
        w="100%"
        p={4}
        bg="#fff"
        _even={{ background: "#F8FAFB" }}
        borderRadius="8px"
        border="1px solid #0000001A"
      >
        {row.map((cell, cellIndex) => (
          <GridItem
            key={cellIndex}
            colSpan={cell.colspan || 1}
            fontWeight="500"
            fontSize="16px"
          >
            {cell.value}
          </GridItem>
        ))}
      </Grid>
    ))}
  </VStack>
);

export default Table;
