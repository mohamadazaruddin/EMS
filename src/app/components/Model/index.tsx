"use client";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

export default function ModelBox({
  isOpen,
  close,
  content,
  header,
  primaryBtnText,
  primaryBtnClick,
}: {
  isOpen: boolean;
  close: () => void;
  header: React.ReactNode;
  content?: React.ReactNode;
  primaryBtnText: string;
  primaryBtnClick: Function;
}) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={close}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          {content && <ModalBody>{content}</ModalBody>}

          <ModalFooter>
            <Button
              bg="#3BCBBE"
              colorScheme="teal"
              mr={3}
              onClick={primaryBtnClick()}
            >
              {primaryBtnText}
            </Button>
            <Button variant="ghost" onClick={close}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
