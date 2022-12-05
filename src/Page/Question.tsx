import React, { useEffect, useState } from "react";
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
  HStack,
  ButtonGroup,
  IconButton,
  useMediaQuery,
} from "@chakra-ui/react";
import { FlexMotion } from "../Shared/ChakraMotion";
import { fade, transition } from "../Shared/Animation";
import { answers, cfPakar, gejala, questions } from "../data/knowledge";
import { useForm, Controller } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const Question = () => {
  const { handleSubmit, control } = useForm();
  const [questionDOM, setquestionDOM] = useState<NodeListOf<Element>>();
  const [questionIndex, setquestionIndex] = useState(0);
  const [isDesktop] = useMediaQuery("(min-width: 62em)");

  const navigate = useNavigate();
  const location = useLocation();
  const testData = location.state;

  const goToQuestion = (index: number) => {
    if (questionDOM && index >= 0 && index < questionDOM.length) {
      questionDOM[index].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      setquestionIndex(index);
    }
  };

  useEffect(() => {
    if (!testData || testData?.userName.length <= 0) {
      navigate("/test");
    }

    window.scrollTo(0, 0);
    if (isDesktop) {
      document.body.style.overflow = "hidden";
    }

    const questionDOM = document.querySelectorAll(".question-group");
    setquestionDOM(questionDOM);
    questionDOM.forEach((question, idx) => {
      question.addEventListener("change", () => {
        const nextQuestion = question.nextElementSibling;
        if (nextQuestion) {
          nextQuestion.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
          setquestionIndex(idx);
        }
      });
    });

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isDesktop]);

  const handleOnSubmit = (data: any) => {
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
      userName: testData.userName,
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
      <ButtonGroup
        isAttached
        variant="outline"
        pos="fixed"
        bottom="1rem"
        right="1rem"
        zIndex={99}
        bgColor="white"
        display={{ base: "none", lg: "initial" }}
      >
        <Button pointerEvents="none">
          Qustion {questionIndex + 1}/{questionDOM?.length}
        </Button>
        <IconButton
          aria-label="Add to friends"
          icon={<Icon as={IoIosArrowUp} />}
          onClick={() => goToQuestion(questionIndex - 1)}
        />
        <IconButton
          aria-label="Add to friends"
          icon={<Icon as={IoIosArrowDown} />}
          onClick={() => goToQuestion(questionIndex + 1)}
        />
      </ButtonGroup>
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
        pos={{ base: "inherit", lg: "fixed" }}
        h={{ base: "50vh", lg: "100%" }}
        w={{ base: "100%", lg: "50%" }}
        objectFit="cover"
        src="https://images.unsplash.com/photo-1586473219010-2ffc57b0d282?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
      />
      <Box ml={{ base: 0, lg: "50%" }} w={{ base: "100%", lg: "50%" }} p={{ base: "2rem 2rem 5rem 2rem", lg: 0 }}>
        <Container as="form" onSubmit={handleSubmit(handleOnSubmit)}>
          <VStack spacing="5rem">
            {questions.map((q, idx) => (
              <Controller
                key={`Q-${idx}`}
                name={`answer[${idx}]`}
                control={control}
                render={({ field: { onChange, value, ref }, fieldState: { invalid, error } }) => {
                  return (
                    <VStack
                      h={{ base: "max-content", lg: "100vh" }}
                      as={FormControl}
                      alignItems="start"
                      justifyContent="center"
                      spacing="1.8rem"
                      key={`Q-${idx}`}
                      isInvalid={invalid}
                      className="question-group"
                    >
                      <FormLabel as={Heading} fontWeight="bold" fontSize="xl">
                        {q}
                      </FormLabel>
                      <RadioGroup w="100%" onChange={onChange} value={value}>
                        <VStack spacing="0.8rem">
                          {answers.map((a, idx) => (
                            <Box w="100%" background="gray.50" borderRadius="15px" key={`A-${idx}`} padding="1rem">
                              <Radio value={String(a.value)} w="100%">
                                {a.label}
                              </Radio>
                            </Box>
                          ))}
                        </VStack>
                      </RadioGroup>
                      {invalid && (
                        <FormErrorMessage bgColor="red.100" borderRadius="5px" p="1rem" color="black" w="100%">
                          {error?.message}
                        </FormErrorMessage>
                      )}
                      {idx === questions.length - 1 && (
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
                  required: "Harap pilih salah satu yang sesuai dengan kondisi kamu.",
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
