"use client";
import { Box, VStack, Text, Link, Flex } from "@chakra-ui/react";
import Logo from "../Icons/Logo";
import {
  NavDashboard,
  NavCompany,
  NavTimeSheet,
  NavLogout,
  NavEditProfile,
  NavDocuments,
} from "../Icons";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  console.log(pathname, "asPath");
  const siderBarItem = [
    {
      label: "Dashboard",
      icon: (
        <NavDashboard
          h="18px"
          w="18px"
          mr="8px"
          color={pathname === "/dashboard" ? "#fff" : "#2C365C"}
        />
      ),
      href: "/dashboard",
    },
    {
      label: "Company",
      icon: (
        <NavCompany
          h="18px"
          w="18px"
          mr="8px"
          color={pathname === "Company" ? "#fff" : "#2C365C"}
        />
      ),
      href: "/company",
    },
    {
      label: "Time Sheet",
      icon: (
        <NavTimeSheet
          h="18px"
          w="18px"
          mr="8px"
          color={pathname === "/time-sheet" ? "#fff" : "#2C365C"}
        />
      ),
      href: "/time-sheet",
    },
    {
      label: "Documents",
      icon: (
        <NavDocuments
          h="18px"
          w="18px"
          mr="8px"
          color={pathname === "/documents" ? "#fff" : "#2C365C"}
        />
      ),
      href: "/documents",
    },
    {
      label: "Edit Profile",
      icon: (
        <NavEditProfile
          h="18px"
          w="18px"
          mr="8px"
          color={pathname === "/edit-profile" ? "#fff" : "#2C365C"}
        />
      ),
      href: "/edit-profile",
    },
    {
      label: "Logout",
      icon: (
        <NavLogout
          h="18px"
          w="18px"
          mr="8px"
          color={pathname === "/logout" ? "#fff" : "#FF3535"}
        />
      ),
      href: "/logout",
    },
  ];
  return (
    <Box
      pos="fixed"
      left="0"
      top="0"
      h="100vh"
      w="250px"
      bg="#FFF"
      p="4"
      textAlign="center"
      pt={10}
    >
      <Text fontSize="xl" fontWeight="bold" mb="10">
        <Logo />
      </Text>
      <VStack as="nav">
        {siderBarItem.map((item, i) => {
          return (
            <Link
              href={item.href}
              bg={pathname === item.href ? "#3BCBBE" : "#fff"}
              color={
                pathname === item.href
                  ? "#fff"
                  : item.label === "Logout"
                  ? "#FF3535"
                  : "#2C365C"
              }
              w="100%"
              h="50px"
              borderRadius="8px"
              p="4"
              key={i}
            >
              <Flex>
                {item.icon}
                <Text> {item.label}</Text>
              </Flex>
            </Link>
          );
        })}
      </VStack>
    </Box>
  );
};

export default Sidebar;
