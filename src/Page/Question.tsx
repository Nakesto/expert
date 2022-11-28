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
  FormErrorMessage,
  Icon,
} from "@chakra-ui/react";
import { FlexMotion } from "../Shared/ChakraMotion";
import { fade, transition } from "../Shared/Animation";
import { answers, cfPakar, gejala, questions } from "../data/knowledge";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";

const Question = () => {
  const { handleSubmit, control } = useForm();
  const navigate = useNavigate();

  const handleOnSubmit = (data: any) => {
    console.log(data);
    let result = cfPakar[0] * data.answer[0];
    for (let i = 1; i < questions.length; i++) {
      const cfCombine = cfPakar[i] * data.answer[i];
      if (result > 0 && cfCombine > 0) {
        result += cfCombine * (1 - result);
      } else if (result < 0 && cfCombine < 0) {
        result += cfCombine * (1 + result);
      } else {
        result = result + cfCombine / (1 - Math.min(Math.abs(result), Math.abs(cfCombine)));
      }
    }
    const testResult = {
      certaintyFactor: result,
      answers: questions.map((question, index) => {
        return {
          question: question,
          answer: data.answer[index],
          gejala: gejala[index],
        };
      }),
    };
    navigate("/result", { state: testResult });
  };

  return (
    <FlexMotion h="100vh" variants={fade} animate="show" exit="hidden" initial="hidden" transition={transition}>
      <Button pos="fixed" top="1.5rem" left="1.5rem" zIndex={99} colorScheme="teal" onClick={() => navigate(-1)}>
        <Icon as={IoArrowBackOutline} mr="0.2rem" />
        Kembali
      </Button>
      <Image
        pos="fixed"
        h="100%"
        w="50%"
        overflow="hidden"
        objectFit="cover"
        src="https://images.unsplash.com/photo-1586473219010-2ffc57b0d282?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
      />
      <Flex ml="50vw" w="50%" py="5rem" h="max-content">
        <Container as="form" onSubmit={handleSubmit(handleOnSubmit)}>
          <VStack spacing="5rem">
            {questions.map((q, idx) => (
              <Controller
                key={`Q-${idx}`}
                name={`answer[${idx}]`}
                control={control}
                render={({ field: { onChange, value }, fieldState: { invalid, error } }) => (
                  <VStack as={FormControl} alignItems="start" spacing="1.8rem" key={`Q-${idx}`} isInvalid={invalid}>
                    <FormLabel as={Heading} fontWeight="bold">
                      {q}
                    </FormLabel>
                    <RadioGroup w="100%" onChange={onChange} value={value}>
                      <VStack spacing="0.8rem">
                        {answers.map((a, idx) => (
                          <Box bgColor="gray.50" padding="1rem" w="100%" borderRadius="15px" key={`A-${idx}`}>
                            <Radio value={String(a.value)}>{a.label}</Radio>
                          </Box>
                        ))}
                      </VStack>
                    </RadioGroup>
                    {invalid && (
                      <FormErrorMessage bgColor="red.100" borderRadius="5px" p="1rem" color="black" w="100%">
                        {error?.message}
                      </FormErrorMessage>
                    )}
                  </VStack>
                )}
                rules={{ required: "Harap pilih salah satu yang sesuai dengan kondisi kamu." }}
              />
            ))}
          </VStack>
          <Flex mt="3rem">
            <Spacer />
            <Button size="lg" colorScheme="teal" type="submit">
              Submit
            </Button>
          </Flex>
        </Container>
      </Flex>
    </FlexMotion>
  );
};

export default Question;
