"use client";
import TreeChart from "@/app/components/Common/TreeChart";
import { VStack, Grid, Flex, GridItem, Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
interface RoleType {
  roleName: string;
  id: number;
}
export default function Chapters() {
  const { data: roleData } = useSWR<RoleType[]>(`/api/getRoles`);
  const [roleId, setRoleId] = useState((roleData && roleData[0].id) || 0);
  const { data: empData } = useSWR(
    `/api/getEmployees?teamId=&roleId=${roleId}`
  );

  useEffect(() => {
    if (roleData) {
      setRoleId(roleData[0].id);
    }
  }, [roleData]);

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
        {roleData && (
          <Grid templateColumns="repeat(4, 1fr)" gap={6}>
            {roleData?.map((item, i) => (
              <Flex
                py="2"
                key={i}
                justifyContent="center"
                alignItems="center"
                bg={item.id === roleId ? "#3BCBBE" : "#fff"}
                onClick={() => setRoleId(item.id)}
                cursor="pointer"
                borderRight={
                  i !== roleData?.length - 1 ? "2px solid #28D999" : "none"
                }
              >
                <GridItem
                  textAlign="center"
                  fontSize="sm"
                  fontWeight="medium"
                  color={item.id === roleId ? "#fff" : "#2C365C"}
                >
                  {item.roleName}
                </GridItem>
              </Flex>
            ))}
          </Grid>
        )}
      </Box>

      <Box w="full">{empData && roleData && <TreeChart data={empData} />}</Box>
    </VStack>
  );
}
