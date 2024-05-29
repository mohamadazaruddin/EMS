"use client";
import React from "react";
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
} from "@chakra-ui/react";
import Logo from "../components/Icons/Logo";
import { Formik, Field, Form, FieldProps, FormikHelpers } from "formik";
import * as Yup from "yup";

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

const initialValues: FormValues = {
  username: "",
  password: "",
};

export default function Login() {
  return (
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
          onSubmit={(
            values: FormValues,
            { setSubmitting }: FormikHelpers<FormValues>
          ) => {
            console.log(values);
            setSubmitting(false);
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
                        />
                        <FormErrorMessage>
                          {form.errors.username}
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
                        />
                        <FormErrorMessage>
                          {form?.errors?.password}
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
  );
}
