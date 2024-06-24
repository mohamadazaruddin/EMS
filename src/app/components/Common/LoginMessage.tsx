"use client";
import { InfoIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  Text,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Alert,
  AlertIcon,
  Divider,
  AbsoluteCenter,
} from "@chakra-ui/react";
import React from "react";
type LoginModalProps = {
  isOpen: boolean;
  onClose: () => void;
  setLoginCredential: Function;
};

export default function LoginMessage({
  isOpen,
  onClose,
  setLoginCredential,
}: LoginModalProps) {
  const credentialInfo = [
    {
      image: "/Images/peoples/jacob.svg",
      name: "Jacob",
      email: "jacob@abc.com",
      password: "jacob@123",
    },
    {
      image: "/Images/peoples/sara.svg",
      name: "Sara",
      email: "sara@abc.com",
      password: "sara@123",
    },
    {
      image: "/Images/peoples/Adam.svg",
      name: "Adam",
      email: "adam@abc.com",
      password: "adam@123",
    },
    {
      image: "/Images/peoples/linda.svg",
      name: "Linda",
      email: "linda@abc.com",
      password: "linda@123",
    },
  ];
  return (
    <Modal
      closeOnOverlayClick={false}
      isOpen={isOpen}
      onClose={onClose}
      size={"lg"}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader p="5" fontSize="lg" color={"brand.800"}>
          Welcomn to Employees Management System !!
        </ModalHeader>
        <ModalBody>
          <Flex
            bg="primary.100"
            p="3"
            gap="3"
            align="center"
            py="4"
            px="4"
            fontSize="xs"
            rounded="base"
          >
            <InfoIcon h="10" w="10" color="primary.500" />
            <Box fontSize="xs" color="brand.800">
              We would like to inform you that this app is a mock application
              and not connected to any real accounts or secured database. Please
              refrain from using your personal email and password to log in.
              Instead, use the credentials provided by us for testing purposes.
            </Box>
          </Flex>
          <Box position="relative" padding="4" mt="5">
            <Divider />
            <AbsoluteCenter
              bg="white"
              px="4"
              fontSize={"sm"}
              fontWeight="medium"
              color="brand.800"
            >
              log in as
            </AbsoluteCenter>
          </Box>
          <Flex py="4" gap="4" justifyContent="space-between">
            {credentialInfo.map((item, i) => (
              <Box
                onClick={() => {
                  setLoginCredential({
                    email: item.email,
                    password: item.password,
                  });
                  onClose();
                }}
                rounded="2"
                _hover={{
                  shadow: "md",
                  transform: "scale(1.08)",
                }}
                cursor="pointer"
                key={`profile-${i}`}
                py="4"
                w="25%"
                bg="secondary.100"
                textAlign="center"
              >
                <Avatar src={item.image} />
                <Text
                  fontSize="sm"
                  mt="2"
                  fontWeight="medium"
                  color={"brand.800"}
                >
                  {item.name}
                </Text>
              </Box>
            ))}
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
