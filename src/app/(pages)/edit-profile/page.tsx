"use client";
import React, { useEffect, useState } from "react";
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
  useToast,
  useEditable,
} from "@chakra-ui/react";
import { Formik, Field, Form, FieldProps, FormikHelpers } from "formik";
import * as Yup from "yup";
import { Add } from "@/app/components/Icons";
import ky from "ky";
import { editProfile } from "@/app/services/types";
import { useSession } from "next-auth/react";
import { PageLayout } from "@/app/components";
import useSWR from "swr";

const validationSchema = Yup.object({
  // firstName: Yup.string().required("Required"),
  // lastName: Yup.string().required("Required"),
  // role: Yup.string().required("Required"),
  // team: Yup.string().required("Required"),
  // email: Yup.string().email("Invalid email address").required("Required"),
  // contact: Yup.string().required("Required"),
});

interface FormValues {
  firstName: string;
  lastName: string;
  role: number;
  team: number;
  email: string;
  contact: string;
}

export default function EditProfile() {
  const userData = useSession();
  const toast = useToast();
  const [profileData, setProfileData] = useState<editProfile>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { data: roles } = useSWR(`/api/getOptions?type=roles`);
  const { data: teams } = useSWR(`/api/getOptions?type=teams`);

  const initialValues: FormValues = {
    firstName: profileData ? profileData[0]?.firstname : "",
    lastName: profileData ? profileData[0]?.lastname : "",
    role: profileData ? profileData[0]?.role?.id : 0,
    team: profileData ? profileData[0]?.team?.id : 0,
    email: profileData ? profileData[0]?.email : "",
    contact: profileData ? profileData[0]?.contact_no : "",
  };

  const editProfileData = async (values: FormValues) => {
    console.log(profileData, "values");
    const response = await ky
      .post(`/api/postProfiledata?id=${userData?.data?.user.id}`, {
        json: {
          id: profileData && profileData[0].id,
          uuid: profileData && profileData[0].uuid,
          email: values.email,
          password: profileData && profileData[0].password,
          firstname: values.firstName,
          lastname: values.lastName,
          profileImage: profileData && profileData[0].profileImage,
          isTeamLead: profileData && profileData[0].isTeamLead,
          isChapterLead: profileData && profileData[0].isChapterLead,
          token: profileData && profileData[0].token,
          role: values.role,
          team: values.team,
          project: profileData && profileData[0].project,
          contact_no: values.contact,
        },
      })
      .json();
    if (response) {
      toast({
        title: "Edit profile successfully",
        status: "success",
        isClosable: true,
      });
      getProfileData();
    } else {
      toast({
        title: "Something went wrong",
        status: "error",
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    getProfileData();
  }, [userData?.data?.user.id]);

  const getProfileData = async () => {
    setIsLoading(true);
    const response = await ky
      .get(`/api/getProfileData?id=${userData?.data?.user.id}`)
      .json<editProfile>();
    if (response) {
      setProfileData(response);
      setIsLoading(false);
    }
  };

  return (
    <PageLayout isLoading={!profileData || isLoading}>
      <VStack bg="#fff" p={6} m={5} h="max-content">
        <VStack w="100%">
          <VStack w="50%" mb={10}>
            <Image
              src={
                profileData && profileData[0] ? profileData[0].profileImage : ""
              }
              borderRadius="50%"
            />
            {/* <Button
              mt={5}
              type="submit"
              bg="#17234D"
              colorScheme="teal"
              leftIcon={<Add />}
              w="40%"
            >
              Upload a photo
            </Button> */}
          </VStack>
          <Box w="100%">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              enableReinitialize
              onSubmit={(
                values: FormValues,
                { setSubmitting }: FormikHelpers<FormValues>
              ) => {
                setSubmitting(false);
                editProfileData(values);
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
                              !!form.errors.firstName &&
                              !!form.touched.firstName
                            }
                          >
                            <FormLabel htmlFor="firstName">
                              First Name
                            </FormLabel>
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
                      <Field name="role">
                        {({ field, form }: FieldProps) => (
                          <FormControl
                            isInvalid={
                              !!form.errors.role && !!form.touched.role
                            }
                          >
                            <FormLabel htmlFor="role">Role</FormLabel>
                            <Select
                              {...field}
                              id="role"
                              placeholder="Select option"
                            >
                              {roles?.map(
                                (
                                  role: { id: number; roleName: string },
                                  i: number
                                ) => (
                                  <option value={role?.id} key={i}>
                                    {role?.roleName}
                                  </option>
                                )
                              )}
                            </Select>
                            <FormErrorMessage>
                              {typeof form.errors.role === "string" &&
                                form.errors.role}
                            </FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                    </GridItem>
                    <GridItem>
                      <Field name="team">
                        {({ field, form }: FieldProps) => (
                          <FormControl
                            isInvalid={
                              !!form.errors.team && !!form.touched.team
                            }
                          >
                            <FormLabel htmlFor="team">Team</FormLabel>
                            <Select
                              {...field}
                              id="team"
                              placeholder="Select option"
                            >
                              {teams?.map(
                                (
                                  team: { id: number; teamName: string },
                                  i: number
                                ) => (
                                  <option value={team?.id} key={i}>
                                    {team?.teamName}
                                  </option>
                                )
                              )}
                            </Select>
                            <FormErrorMessage>
                              {typeof form.errors.team === "string" &&
                                form.errors.team}
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
    </PageLayout>
  );
}
