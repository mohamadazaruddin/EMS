"use client";
import {
  Box,
  VStack,
  Text,
  Link,
  Flex,
  Divider,
  HStack,
  useToast,
} from "@chakra-ui/react";
import Logo from "../Icons/Logo";
import {
  NavDashboard,
  NavCompany,
  NavTimeSheet,
  NavLogout,
  NavEditProfile,
  NavDocuments,
  NavTeams,
  NavChapters,
  NavOrganization,
} from "../Icons";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import ModelBox from "../Model";
import ky from "ky";

const Sidebar = () => {
  const { push } = useRouter();
  const toast = useToast();
  const pathname = usePathname();
  const [isLogout, setIsLogout] = useState(false);
  const siderBarItem = [
    {
      label: "Dashboard",
      icon: (
        <NavDashboard
          h="18px"
          w="18px"
          mr="8px"
          color={pathname.includes("dashboard") ? "#fff" : "#2C365C"}
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
          color={pathname.includes("company") ? "#fff" : "#2C365C"}
        />
      ),
      href: "/company/teams",
      options: [
        {
          label: "Teams",
          icon: (
            <NavTeams
              h="18px"
              w="18px"
              mr="8px"
              color={pathname === "/dashboard" ? "#fff" : "#2C365C"}
            />
          ),
          href: "/company/teams",
        },
        {
          label: "Chapters",
          icon: (
            <NavChapters
              h="18px"
              w="18px"
              mr="8px"
              color={pathname === "/dashboard" ? "#fff" : "#2C365C"}
            />
          ),
          href: "/company/chapters",
        },
        {
          label: "Organization",
          icon: (
            <NavOrganization
              h="18px"
              w="18px"
              mr="8px"
              color={pathname === "/dashboard" ? "#fff" : "#2C365C"}
            />
          ),
          href: "/company/org",
        },
      ],
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
      onClick: () => setIsLogout(true),
    },
  ];

  const handleLogout = async () => {
    try {
      const response = ky.post(`/api/auth/logout`);
      if (await response) {
        push("/");
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        status: "error",
        isClosable: true,
      });
    }
  };

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
    >
      <Text fontSize="xl" fontWeight="bold" mb="5">
        <Logo />
      </Text>
      <VStack as="nav">
        {siderBarItem.map((item, i) => {
          return (
            <>
              <Link
                href={item.href}
                bg={
                  item?.href && pathname.includes(item?.href)
                    ? "#3BCBBE"
                    : "#fff"
                }
                _hover={{
                  bg:
                    item?.href && pathname.includes(item?.href)
                      ? "#3BCBBE"
                      : "primary.100",
                }}
                color={
                  item?.href && pathname.includes(item?.href)
                    ? "#fff"
                    : item.label === "Logout"
                    ? "#FF3535"
                    : "#2C365C"
                }
                w="100%"
                borderRadius="8px"
                px="4"
                py="3"
                key={i}
                fontSize="sm"
                fontWeight="medium"
                onClick={item.label === "Logout" ? item.onClick : undefined} // Attach onClick for Logout
              >
                <Flex>
                  {item.icon}
                  <Text> {item.label}</Text>
                </Flex>
              </Link>
              {pathname.includes("company") &&
                item.href?.includes("/company") && (
                  <HStack gap={0}>
                    <Divider
                      orientation="vertical"
                      color="#80869D"
                      borderColor="#80869D"
                      h="133px"
                      ms={4}
                    />
                    <VStack gap={0} alignItems="flex-start" w="full">
                      {item.options?.map((item, i) => {
                        return (
                          <HStack key={i} w="full">
                            <Divider
                              orientation="horizontal"
                              color="#80869D"
                              borderColor="#80869D"
                              w="10px"
                            />
                            <Link
                              href={item.href}
                              bg={
                                item.href.includes(pathname)
                                  ? "#F7F8FA"
                                  : "#fff"
                              }
                              color={
                                item.href.includes(pathname)
                                  ? "#2C365C"
                                  : item.label === "Logout"
                                  ? "#FF3535"
                                  : "#2C365C"
                              }
                              w="100%"
                              px="4"
                              py="3"
                              borderRadius="8px"
                              key={i}
                              fontSize="sm"
                              fontWeight="medium"
                            >
                              <Flex>
                                {item.icon}
                                <Text> {item.label}</Text>
                              </Flex>
                            </Link>
                          </HStack>
                        );
                      })}
                    </VStack>
                  </HStack>
                )}
            </>
          );
        })}
      </VStack>

      {isLogout && (
        <ModelBox
          isOpen={isLogout}
          close={() => {
            setIsLogout(false);
          }}
          header={"Confirm Logout"}
          content={"Are you sure you want to log out?"}
          primaryBtnText={"Logout"}
          primaryBtnClick={handleLogout}
        />
      )}
    </Box>
  );
};

export default Sidebar;
