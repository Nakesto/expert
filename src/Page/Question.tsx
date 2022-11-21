import React from "react";
import {
  Box,
  Flex,
  Image,
  Stack,
  Heading,
  Text,
  Center,
  Button,
  Container,
  RadioGroup,
  Radio,
  VStack,
  Spacer,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { FlexMotion } from "../Shared/ChakraMotion";
import { fade, transition } from "../Shared/Animation";
import { answers, questions } from "../data/knowledge";
import { useForm, Controller } from "react-hook-form";

const Question = () => {
  const { register, handleSubmit, control } = useForm();

  const handleOnSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <FlexMotion h="100vh" variants={fade} animate="show" exit="hidden" initial="hidden" transition={transition}>
      <Image
        pos="fixed"
        h="100%"
        w="50%"
        overflow="hidden"
        objectFit="cover"
        src="https://images.unsplash.com/photo-1607688387751-c1e95ae09a42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      />
      <Flex ml="50vw" w="50%" py="5rem" h="max-content">
        <Container as="form" onSubmit={handleSubmit(handleOnSubmit)}>
          <VStack spacing="5rem">
            {questions.map((q, idx) => (
              <VStack as={FormControl} alignItems="start" spacing="1.8rem" key={`Q-${idx}`}>
                <FormLabel as={Heading} fontWeight="bold">
                  {q}
                </FormLabel>
                <RadioGroup w="100%">
                  <VStack spacing="0.8rem">
                    {answers.map((a, idx) => (
                      <Box bgColor="gray.50" padding="1rem" w="100%" borderRadius="15px" key={`A-${idx}`}>
                        <Radio value={String(a.value)}>{a.label}</Radio>
                      </Box>
                    ))}
                  </VStack>
                </RadioGroup>
              </VStack>
            ))}
          </VStack>
          <Flex mt="3rem">
            <Spacer />
            <Button size="lg" colorScheme="teal">
              Submit
            </Button>
          </Flex>
        </Container>
      </Flex>
    </FlexMotion>
  );
};

export default Question;
