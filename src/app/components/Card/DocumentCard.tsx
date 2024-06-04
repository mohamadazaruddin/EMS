import React from "react";
import {
  Box,
  Grid,
  GridItem,
  HStack,
  VStack,
  Text,
  Flex,
  MenuButton,
  IconButton,
  MenuList,
  Menu,
  MenuItem,
} from "@chakra-ui/react";
import { XlsxIcon, MenuIcon, Download, Delete } from "@/app/components/Icons";

export default function DocumentCard({ ...rest }) {
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
            <MenuItem icon={<Download h="14px" w="14px" />}>Download</MenuItem>
            <MenuItem icon={<Delete h="14px" w="14px" />}>Delete</MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <VStack>
        <Box>
          <XlsxIcon h="80px" w="80px" />
        </Box>
        <Text mt={4} pb={5} color="#091641" fontSize={"md"} fontWeight="medium">
          HR_Policies.pdf
        </Text>
        <Flex justifyContent="space-between" mb={4} w="100%">
          <Box mr={4}>
            <Text color="#555D7B" mb={1} fontSize={"xs"}>
              File Size :
            </Text>
            <Text color="#2C365C" fontSize={"xs"} fontWeight="medium">
              2.5 mb
            </Text>
          </Box>
          <Box>
            <Text color="#555D7B" mb={1} fontSize={"xs"}>
              Uploaded on :
            </Text>
            <Text color="#2C365C" fontSize={"xs"} fontWeight="medium">
              04/05/2023
            </Text>
          </Box>
        </Flex>
      </VStack>
    </Box>
  );
}
