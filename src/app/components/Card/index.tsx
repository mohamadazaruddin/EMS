import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";

const BasicCard = ({ ...rest }) => {
  return <Card {...rest}></Card>;
};

export default BasicCard;
