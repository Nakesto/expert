import React from "react";
import { Box, Flex, Image, Stack, Heading, Text, Center, Button, Container } from "@chakra-ui/react";
import { FlexMotion } from "../Shared/ChakraMotion";
import { fade, transition } from "../Shared/Animation";
import { Outlet } from "react-router-dom";

const Question = () => {
  return (
    <FlexMotion h="100vh" variants={fade} animate="show" exit="hidden" initial="hidden" transition={transition}>
      <Image
        h="100%"
        w="50%"
        overflow="hidden"
        objectFit="cover"
        src="https://images.unsplash.com/photo-1607688387751-c1e95ae09a42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      />
      <Center h="100%" w="50%">
        <Outlet />
      </Center>
    </FlexMotion>
  );
};

export default Question;
