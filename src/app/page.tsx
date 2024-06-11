"use client";
import React, { useEffect, useState } from "react";
import {
  Text,
  VStack,
  Box,
  Flex,
  Button,
  Spacer,
  Input,
  HStack,
  Link,
  FormControl,
  FormLabel,
  FormErrorMessage,
  useDisclosure,
} from "@chakra-ui/react";

import { Formik, Field, Form, FieldProps, FormikHelpers } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import Logo from "./components/Icons/Logo";
import { LoginMessage } from "./components";

import { getSession, signIn } from "next-auth/react";

const validationSchema = Yup.object({
  username: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Required"),
});

interface FormValues {
  username: string;
  password: string;
}

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [loginCredential, setLoginCredential] = useState({
    email: "",
    password: "",
  });
  const { onClose: closeLoginModal } = useDisclosure();
  const { push } = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  const initialValues: FormValues = {
    username: loginCredential.email || "",
    password: loginCredential.password || "",
  };
  const submitHandler = (values: FormValues) => {
    signIn("credentials", {
      email: values.username,
      password: values.password,
    }).then(async (response) => {
      console.log(response, "response");
      if (response?.ok) {
        console.log(response, "response");
      } else {
        console.log(response, "response error");
      }
    });
  };

  return (
    <>
      <LoginMessage
        isOpen={!loginCredential.email.length && showModal}
        onClose={() => {}}
        setLoginCredential={setLoginCredential}
      />
      <VStack m="auto" h="100%" justifyContent="center">
        <Logo />
        <Text color="#091641" fontSize="4xl" fontWeight="medium" mt="4">
          Welcome Back!
        </Text>
        <Text color="091641" fontSize="lg">
          Login to your account
        </Text>
        <Box w="full" maxW="md">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            enableReinitialize
            onSubmit={(
              values: FormValues,
              { setSubmitting }: FormikHelpers<FormValues>
            ) => {
              console.log(values);
              submitHandler(values);
              // push("/dashboard");
              // setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <Flex flexDir="column" h="full" w="full">
                  <Box pb="10" pt={7}>
                    <Field name="username">
                      {({ field, form }: FieldProps) => (
                        <FormControl
                          isInvalid={
                            !!form.errors.username && !!form.touched.username
                          }
                        >
                          <FormLabel htmlFor="username">Email</FormLabel>
                          <Input
                            {...field}
                            id="username"
                            placeholder="abc@gmail.com"
                            type="email"
                            isDisabled={!loginCredential.email}
                          />
                          <FormErrorMessage>
                            {typeof form.errors.username === "string" &&
                              form.errors.username}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                  </Box>
                  <Box pb="3" pos="relative">
                    <Field name="password">
                      {({ field, form }: FieldProps) => (
                        <FormControl
                          isInvalid={
                            !!form.errors.password && !!form.touched.password
                          }
                        >
                          <FormLabel htmlFor="password">Password</FormLabel>
                          <Input
                            {...field}
                            id="password"
                            placeholder="****"
                            type="password"
                            isDisabled={!loginCredential.password}
                          />
                          <FormErrorMessage>
                            {typeof form.errors.password === "string" &&
                              form.errors.password}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Box textAlign="end" mt="2">
                      <Link
                        textDecor="underline"
                        color="#091641CC"
                        mb={4}
                        fontSize="lg"
                        fontWeight="normal"
                      >
                        Forgot password?
                      </Link>
                    </Box>
                  </Box>
                  <Spacer />
                  <Box px={10} py={4}>
                    <Button
                      type="submit"
                      bg="#3BCBBE"
                      isLoading={isSubmitting}
                      colorScheme="teal"
                      w="full"
                    >
                      Login
                    </Button>
                    <HStack mt="2" justifyContent="center">
                      <Text color="gray.400" fontSize="lg" fontWeight="normal">
                        Don’t have an account?
                      </Text>
                      <Link color="#3BCBBE" fontSize="lg" fontWeight="normal">
                        Sign up
                      </Link>
                    </HStack>
                  </Box>
                </Flex>
              </Form>
            )}
          </Formik>
        </Box>
      </VStack>
    </>
  );
}
