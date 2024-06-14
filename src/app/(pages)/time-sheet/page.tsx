"use client";
import { PageLayout, Table } from "@/app/components";
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
  useToast,
} from "@chakra-ui/react";
import { Field, FieldProps, Form, Formik, FormikHelpers } from "formik";
import ky from "ky";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import * as Yup from "yup";
import { timesheetData } from "../../services/types";

const validationSchema = Yup.object({
  date: Yup.string().required("Required"),
  task: Yup.string().required("Required"),
  project: Yup.string().required("Required"),
  estimationHr: Yup.number().required("Required"),
  completedHr: Yup.number().required("Required"),
});

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
  const userData = useSession();
  const toast = useToast();
  const [timesheetData, setTimesheetData] = useState<timesheetData>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // const { data: timesheetData } = useSWR(
  //   `/api/timesheet?id=${userData?.data?.user.id}`
  // );

  console.log(timesheetData, "timesheetData");
  useEffect(() => {
    if (userData?.data?.user.id) {
      getTimeSheetData();
    }
  }, [userData?.data?.user.id]);

  const getTimeSheetData = async () => {
    setIsLoading(true);
    const response = await ky
      .get(`/api/timesheet?id=${userData?.data?.user.id}`)
      .json<timesheetData>();
    if (response) {
      setTimesheetData(response);
      setIsLoading(false);
    }
  };

  const { data: projects } = useSWR(`/api/getOptions?type=projects`);

  function formatDate(dateString: string): string {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "short",
      year: "numeric",
    };
    return date.toLocaleDateString("en-GB", options);
  }

  const submitTaskHandler = async (values: FormValues) => {
    const taskData = {
      taskName: values.task,
      estimation: values.estimationHr,
      completed: values.completedHr,
      employee: userData?.data?.user.id,
      project: Number(values.project),
      date: values.date,
    };
    const response = await ky.post(`/api/timesheet/submitTask`, {
      json: taskData,
    });
    if (response) {
      getTimeSheetData();
      toast({
        title: "Task added successfully",
        status: "success",
        isClosable: true,
      });
    } else {
      toast({
        title: "Something went wrong",
        status: "error",
        isClosable: true,
      });
    }
  };

  return (
    <PageLayout isLoading={!timesheetData || isLoading}>
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
              submitTaskHandler(values);
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
                            isInvalid={
                              !!form.errors.date && !!form.touched.date
                            }
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
                            isInvalid={
                              !!form.errors.date && !!form.touched.date
                            }
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
                              {projects?.map(
                                (
                                  project: { id: number; projectName: string },
                                  i: number
                                ) => (
                                  <option value={project?.id} key={i}>
                                    {project?.projectName}
                                  </option>
                                )
                              )}
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
                                type="number"
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
                                type="number"
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
          {timesheetData && (
            <Table
              tableGridSize={16}
              isHeader={true}
              tableHeader={[
                {
                  label: "Date",
                  colspan: 2,
                },
                {
                  label: "Task",
                  colspan: 5,
                },
                {
                  label: "Project",
                  colspan: 3,
                },
                {
                  label: "Estimated",
                  colspan: 2,
                },
                {
                  label: "Completed",
                  colspan: 2,
                },
                {
                  label: "Remaining",
                  colspan: 2,
                },
              ]}
              tableBodyData={timesheetData.map((item) => [
                {
                  value: item.taskName,
                  colspan: 2,
                  style: {},
                  labelColor: "string",
                },
                {
                  value: item.taskName,
                  colspan: 5,
                  style: {},
                  labelColor: "string",
                },
                {
                  value: item.taskName,
                  colspan: 3,
                  style: {},
                  labelColor: "string",
                },
                {
                  value: item.estimation,
                  colspan: 2,
                  style: {},
                  labelColor: "string",
                },
                {
                  value: item.completed,
                  colspan: 2,
                  style: {},
                  labelColor: "string",
                },
                {
                  value: item.estimation - item.completed,
                  colspan: 2,
                  style: {},
                  labelColor: "string",
                },
              ])}
            />
          )}
        </Box>
      </VStack>
    </PageLayout>
  );
}
