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
  const documentData = [
    {
      name: "HR_Policies.pdf",
      size: "2 MB",
      updated: "04/05/2023",
      url: "/documents/HR_Policy.pdf",
    },
    {
      name: "Holiday_list.pdf",
      size: "3 MB",
      updated: "15/03/2023",
      url: "/documents/Holiday_list.pdf",
    },
  ];
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
        {documentData.map((document, i) => {
          return (
            <GridItem
              colSpan={1}
              bg="#fff"
              p={4}
              borderRadius="8px"
              mr={10}
              key={i}
            >
              <DocumentCard
                bg="#fff"
                p={4}
                borderRadius="8px"
                mr={10}
                documentData={document}
              />
            </GridItem>
          );
        })}

        {/* <GridItem colSpan={1} bg="#fff" p={4} borderRadius="8px" mr={10}>
          <DocumentCard
            bg="#fff"
            p={4}
            borderRadius="8px"
            mr={10}
            documentData={documentData}
          />
        </GridItem> */}
      </Grid>
    </VStack>
  );
}
