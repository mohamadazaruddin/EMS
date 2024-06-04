"use client";
import { Table } from "@/app/components";
import { Add } from "@/app/components/Icons";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  GridItem,
  HStack,
  Input,
  Select,
  VStack,
} from "@chakra-ui/react";
import { Field, FieldProps, Form, Formik, FormikHelpers } from "formik";
import React from "react";
import * as Yup from "yup";

const validationSchema = Yup.object({});

interface FormValues {
  date: string;
  task: string;
  project: string;
  estimationHr: string;
  completedHr: string;
}

const initialValues: FormValues = {
  date: "",
  task: "",
  project: "",
  estimationHr: "",
  completedHr: "",
};

export default function TimeSheet() {
  return (
    <VStack w="100%" p={6}>
      <HStack
        bg="#fff"
        p={6}
        w="100%"
        justifyContent="space-between"
        borderRadius="8px"
      >
        <Formik
          w="100%"
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
            <Form style={{ width: "100%" }}>
              <Flex flexDir="column" h="full" w="full">
                <Grid templateColumns="repeat(8, 1fr)" gap={10} w="100%">
                  <GridItem colSpan={1}>
                    <Field name="date" width="25%">
                      {({ field, form }: FieldProps) => (
                        <FormControl
                          isInvalid={!!form.errors.date && !!form.touched.date}
                        >
                          <FormLabel
                            htmlFor="date"
                            fontSize="xs"
                            color="#091641"
                            fontWeight="600"
                          >
                            Date
                          </FormLabel>
                          <Input
                            {...field}
                            id="date"
                            placeholder="abc@gmail.com"
                            type="date"
                          />
                          <FormErrorMessage>
                            {typeof form.errors.date === "string" &&
                              form.errors.date}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                  </GridItem>
                  <GridItem colSpan={4}>
                    <Field name="task">
                      {({ field, form }: FieldProps) => (
                        <FormControl
                          isInvalid={!!form.errors.date && !!form.touched.date}
                        >
                          <FormLabel
                            htmlFor="task"
                            fontSize="xs"
                            color="#091641"
                            fontWeight="600"
                          >
                            Name the task
                          </FormLabel>
                          <Input
                            h="127px"
                            {...field}
                            id="task"
                            placeholder="Add Task..."
                            type="text"
                          />
                          <FormErrorMessage>
                            {typeof form.errors.task === "string" &&
                              form.errors.task}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                  </GridItem>
                  <GridItem colSpan={2}>
                    <Field name="project">
                      {({ field, form }: FieldProps) => (
                        <FormControl
                          isInvalid={
                            !!form.errors.project && !!form.touched.project
                          }
                        >
                          <FormLabel
                            htmlFor="project"
                            fontSize="xs"
                            color="#091641"
                            fontWeight="600"
                          >
                            Project Name
                          </FormLabel>
                          <Select
                            {...field}
                            id="project"
                            placeholder="Select option"
                          >
                            <option value="option1">CRR</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                          </Select>
                          <FormErrorMessage>
                            {typeof form.errors.project === "string" &&
                              form.errors.project}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <HStack mt={4}>
                      <Field name="estimationHr">
                        {({ field, form }: FieldProps) => (
                          <FormControl
                            isInvalid={
                              !!form.errors.estimationHr &&
                              !!form.touched.estimationHr
                            }
                          >
                            <FormLabel
                              htmlFor="estimationHr"
                              fontSize="xs"
                              color="#091641"
                              fontWeight="600"
                            >
                              Estimated Hours
                            </FormLabel>
                            <Input
                              {...field}
                              id="estimationHr"
                              placeholder=""
                              type="text"
                            />
                            <FormErrorMessage>
                              {typeof form.errors.estimationHr === "string" &&
                                form.errors.estimationHr}
                            </FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                      <Field name="completedHr">
                        {({ field, form }: FieldProps) => (
                          <FormControl
                            isInvalid={
                              !!form.errors.completedHr &&
                              !!form.touched.completedHr
                            }
                          >
                            <FormLabel
                              htmlFor="completedHr"
                              fontSize="xs"
                              color="#091641"
                              fontWeight="600"
                            >
                              Completed hours
                            </FormLabel>
                            <Input
                              {...field}
                              id="completedHr"
                              placeholder=""
                              type="text"
                            />
                            <FormErrorMessage>
                              {typeof form.errors.completedHr === "string" &&
                                form.errors.completedHr}
                            </FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                    </HStack>
                  </GridItem>
                  <GridItem colSpan={1} m="auto">
                    <Button
                      type="submit"
                      bg="#3BCBBE"
                      isLoading={isSubmitting}
                      colorScheme="teal"
                      w="full"
                      leftIcon={<Add />}
                    >
                      Add
                    </Button>
                  </GridItem>
                </Grid>
              </Flex>
            </Form>
          )}
        </Formik>
      </HStack>
      <Box w="100%" mt={10}>
        <Table />
      </Box>
    </VStack>
  );
}
