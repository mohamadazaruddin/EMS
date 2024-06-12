"use client";
import React from "react";
import {
  Box,
  VStack,
  Grid,
  GridItem,
  Image,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Select,
} from "@chakra-ui/react";
import { Formik, Field, Form, FieldProps, FormikHelpers } from "formik";
import * as Yup from "yup";
import { Add } from "@/app/components/Icons";

const validationSchema = Yup.object({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  Role: Yup.string().required("Required"),
  Team: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  contact: Yup.string().required("Required"),
});

interface FormValues {
  firstName: string;
  lastName: string;
  Role: string;
  Team: string;
  email: string;
  contact: string;
}

const initialValues: FormValues = {
  firstName: "",
  lastName: "",
  Role: "",
  Team: "",
  email: "",
  contact: "",
};

export default function EditProfile() {
  return (
    <VStack bg="#fff" p={6} m={5} h="max-content">
      <VStack w="100%">
        <VStack w="50%" mb={10}>
          <Image src="./images/profile.png" borderRadius="50%" />
          <Button
            mt={5}
            type="submit"
            bg="#17234D"
            colorScheme="teal"
            leftIcon={<Add />}
            w="40%"
          >
            Upload a photo
          </Button>
        </VStack>
        <Box w="100%">
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
                <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                  <GridItem>
                    <Field name="firstName">
                      {({ field, form }: FieldProps) => (
                        <FormControl
                          isInvalid={
                            !!form.errors.firstName && !!form.touched.firstName
                          }
                        >
                          <FormLabel htmlFor="firstName">First Name</FormLabel>
                          <Input
                            {...field}
                            id="firstName"
                            placeholder="Nishi"
                            type="text"
                          />
                          <FormErrorMessage>
                            {typeof form.errors.firstName === "string" &&
                              form.errors.firstName}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                  </GridItem>
                  <GridItem>
                    <Field name="lastName">
                      {({ field, form }: FieldProps) => (
                        <FormControl
                          isInvalid={
                            !!form.errors.lastName && !!form.touched.lastName
                          }
                        >
                          <FormLabel htmlFor="lastName">Last Name</FormLabel>
                          <Input
                            {...field}
                            id="lastName"
                            placeholder="Gawas"
                            type="text"
                          />
                          <FormErrorMessage>
                            {typeof form.errors.lastName === "string" &&
                              form.errors.lastName}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                  </GridItem>
                  <GridItem>
                    <Field name="Role">
                      {({ field, form }: FieldProps) => (
                        <FormControl
                          isInvalid={!!form.errors.Role && !!form.touched.Role}
                        >
                          <FormLabel htmlFor="role">Role</FormLabel>
                          <Input
                            {...field}
                            id="role"
                            placeholder="Role"
                            type="text"
                          />
                          <FormErrorMessage>
                            {typeof form.errors.Role === "string" &&
                              form.errors.Role}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                  </GridItem>
                  <GridItem>
                    <Field name="Team">
                      {({ field, form }: FieldProps) => (
                        <FormControl
                          isInvalid={!!form.errors.Team && !!form.touched.Team}
                        >
                          <FormLabel htmlFor="team">Team</FormLabel>
                          <Select
                            {...field}
                            id="team"
                            placeholder="Select option"
                          >
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                          </Select>
                          <FormErrorMessage>
                            {typeof form.errors.Team === "string" &&
                              form.errors.Team}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                  </GridItem>
                  <GridItem>
                    <Field name="email">
                      {({ field, form }: FieldProps) => (
                        <FormControl
                          isInvalid={
                            !!form.errors.email && !!form.touched.email
                          }
                        >
                          <FormLabel htmlFor="email">Email</FormLabel>
                          <Input
                            {...field}
                            id="email"
                            placeholder="abc@gmail.com"
                            type="text"
                          />
                          <FormErrorMessage>
                            {typeof form.errors.email === "string" &&
                              form.errors.email}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                  </GridItem>
                  <GridItem>
                    <Field name="contact">
                      {({ field, form }: FieldProps) => (
                        <FormControl
                          isInvalid={
                            !!form.errors.contact && !!form.touched.contact
                          }
                        >
                          <FormLabel htmlFor="contact">Contact</FormLabel>
                          <Input
                            {...field}
                            id="contact"
                            placeholder="987654379"
                            type="number"
                          />
                          <FormErrorMessage>
                            {typeof form.errors.contact === "string" &&
                              typeof form.errors.contact}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                  </GridItem>
                </Grid>
                <VStack mt={10}>
                  <Button
                    type="submit"
                    bg="#3BCBBE"
                    isLoading={isSubmitting}
                    colorScheme="teal"
                    w="20%"
                  >
                    Save Change
                  </Button>
                </VStack>
              </Form>
            )}
          </Formik>
        </Box>
      </VStack>
    </VStack>
  );
}
