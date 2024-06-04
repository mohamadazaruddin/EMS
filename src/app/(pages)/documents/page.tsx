import React from "react";
import {
  Box,
  Grid,
  GridItem,
  HStack,
  VStack,
  Text,
  Flex,
} from "@chakra-ui/react";
import { XlsxIcon, MenuIcon } from "@/app/components/Icons";
import { DocumentCard } from "@/app/components";

export default function Documents() {
  return (
    <VStack w="100%" p={6} alignItems={"flex-start"}>
      <HStack
        bg="#fff"
        p={6}
        w="100%"
        justifyContent="space-between"
        borderRadius="8px"
      ></HStack>
      <Grid templateColumns="repeat(5, 1fr)" mt={10}>
        <GridItem colSpan={1} bg="#fff" p={4} borderRadius="8px" mr={10}>
          <DocumentCard bg="#fff" p={4} borderRadius="8px" mr={10} />
        </GridItem>
        <GridItem colSpan={1} bg="#fff" p={4} borderRadius="8px" mr={10}>
          <DocumentCard bg="#fff" p={4} borderRadius="8px" mr={10} />
        </GridItem>
      </Grid>
    </VStack>
  );
}
