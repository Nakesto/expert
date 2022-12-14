import React, { useEffect } from "react";
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
  Input,
} from "@chakra-ui/react";
import { FlexMotion } from "../Shared/ChakraMotion";
import { fade, transition } from "../Shared/Animation";
import { answers, cfPakar, gejala, questions } from "../data/knowledge";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";

const Question = () => {
  const { handleSubmit, control, setFocus } = useForm();

  const navigate = useNavigate();

  const scrollTo = () => {
    const questionDOM = document.querySelectorAll(".question-group");
    questionDOM.forEach((question) => {
      question.addEventListener("change", () => {
        const nextQuestion = question.nextElementSibling;
        if (nextQuestion) {
          nextQuestion.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }
      });
    });
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    window.addEventListener("load", scrollTo);
    window.scrollTo(0, 0);

    return () => {
      window.removeEventListener("load", scrollTo);
      document.body.style.overflow = "auto";
    };
  }, []);

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
        result =
          result +
          cfCombine / (1 - Math.min(Math.abs(result), Math.abs(cfCombine)));
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
    <FlexMotion
      minH="100vh"
      variants={fade}
      animate="show"
      exit="hidden"
      initial="hidden"
      transition={transition}
      flexDir={{ base: "column" }}
    >
      <Button
        pos={{ base: "absolute", lg: "fixed" }}
        top="1.5rem"
        left="1.5rem"
        zIndex={99}
        colorScheme="teal"
        onClick={() => navigate(-1)}
      >
        <Icon as={IoArrowBackOutline} mr="0.2rem" />
        Kembali
      </Button>
      <Image
        pos={{ lg: "fixed" }}
        h={{ base: "50vh", lg: "100%" }}
        w={{ base: "100%", lg: "50%" }}
        display={{ base: "none", lg: "block" }}
        objectFit="cover"
        src="https://images.unsplash.com/photo-1586473219010-2ffc57b0d282?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
      />
      <Box ml={{ base: 0, lg: "50%" }} w={{ base: "100%", lg: "50%" }}>
        <Container as="form" onSubmit={handleSubmit(handleOnSubmit)}>
          <VStack spacing="5rem" sx={{ overflow: "hidden" }}>
            {questions.map((q, idx) => (
              <Controller
                key={`Q-${idx}`}
                name={`answer[${idx}]`}
                control={control}
                render={({
                  field: { onChange, value, ref },
                  fieldState: { invalid, error },
                }) => {
                  return (
                    <VStack
                      as={FormControl}
                      alignItems="start"
                      spacing="1.8rem"
                      key={`Q-${idx}`}
                      isInvalid={invalid}
                      height="100vh"
                      className="question-group"
                      justifyContent="center"
                    >
                      <FormLabel as={Heading} fontWeight="bold" fontSize="xl">
                        {q}
                      </FormLabel>
                      <RadioGroup w="100%" onChange={onChange} value={value}>
                        <VStack spacing="0.8rem">
                          {answers.map((a, idx) => (
                            <Box
                              w="100%"
                              background="gray.50"
                              borderRadius="15px"
                              key={`A-${idx}`}
                              padding="1rem"
                              color="black"
                            >
                              <Radio value={String(a.value)} w="100%">
                                {a.label}
                              </Radio>
                            </Box>
                          ))}
                        </VStack>
                      </RadioGroup>
                      {invalid && (
                        <FormErrorMessage
                          bgColor="red.100"
                          borderRadius="5px"
                          p="1rem"
                          color="black"
                          w="100%"
                        >
                          {error?.message}
                        </FormErrorMessage>
                      )}
                      {questions.length - 1 === idx && (
                        <Flex mt="3rem" w="100%">
                          <Spacer />
                          <Button size="lg" colorScheme="teal" type="submit">
                            Submit
                          </Button>
                        </Flex>
                      )}
                    </VStack>
                  );
                }}
                rules={{
                  required:
                    "Harap pilih salah satu yang sesuai dengan kondisi kamu.",
                }}
              />
            ))}
          </VStack>
        </Container>
      </Box>
    </FlexMotion>
  );
};

export default Question;
