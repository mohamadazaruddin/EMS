import React from "react";
import {
  Box,
  VStack,
  Text,
  Flex,
  MenuButton,
  IconButton,
  MenuList,
  Menu,
  MenuItem,
  BoxProps,
} from "@chakra-ui/react";
import { PDFIcon, MenuIcon, Download } from "@/app/components/Icons";

interface DocumentData extends BoxProps {
  name: string;
  size: string;
  url: string;
  updated: string;
}

export default function DocumentCard({
  documentData,
  ...rest
}: {
  documentData: DocumentData;
} & BoxProps) {
  return (
    <Box {...rest} w="100%">
      <Box textAlign="end">
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<MenuIcon />}
            variant="outline"
          />
          <MenuList>
            <a
              href={documentData.url}
              download={documentData.name}
              style={{ color: "unset", textDecoration: "none" }}
            >
              <MenuItem icon={<Download h="14px" w="14px" />}>
                Download
              </MenuItem>
            </a>
            {/* <MenuItem icon={<Delete h="14px" w="14px" />}>Delete</MenuItem> */}
          </MenuList>
        </Menu>
      </Box>
      <VStack>
        <Box>
          <PDFIcon h="80px" w="80px" />
        </Box>
        <Text mt={4} pb={5} color="#091641" fontSize={"md"} fontWeight="medium">
          {documentData.name}
        </Text>
        <Flex justifyContent="space-between" mb={4} w="100%">
          <Box mr={4}>
            <Text color="#555D7B" mb={1} fontSize={"xs"}>
              File Size :
            </Text>
            <Text color="#2C365C" fontSize={"xs"} fontWeight="medium">
              {documentData.size}
            </Text>
          </Box>
          <Box>
            <Text color="#555D7B" mb={1} fontSize={"xs"}>
              Uploaded on :
            </Text>
            <Text color="#2C365C" fontSize={"xs"} fontWeight="medium">
              {documentData.updated}
            </Text>
          </Box>
        </Flex>
      </VStack>
    </Box>
  );
}
