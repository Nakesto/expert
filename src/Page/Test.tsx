import React, { MutableRefObject, useEffect, useRef } from "react";
import {
  Box,
  Flex,
  Image,
  Heading,
  Text,
  Center,
  Button,
  Container,
  transition,
  Input,
  Spacer,
  VStack,
  Icon,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { fade } from "../Shared/Animation";
import { FlexMotion } from "../Shared/ChakraMotion";
import { IoArrowBackOutline } from "react-icons/io5";

const Test = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = React.useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <FlexMotion
      minH="100vh"
      variants={fade}
      animate="show"
      exit="hidden"
      initial="hidden"
      transition={transition}
      flexDir={{ base: "column-reverse", lg: "row" }}
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
      <Center h={{ base: "max-content", lg: "100vh" }} w={{ base: "100%", lg: "50%" }} my={{ base: "2rem", lg: 0 }}>
        <Container>
          <VStack alignItems="start" spacing="2rem">
            <Heading>Tes Depresi Untuk Mahasiswa</Heading>
            <Text fontSize="xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. In obcaecati beatae quis, eos ut minima libero
              quasi perferendis eligendi dolore iusto aperiam voluptas alias, expedita, quibusdam nostrum dolorum omnis?
              Iure obcaecati nemo impedit natus reiciendis dolorem! Temporibus harum perferendis ex qui iure, quisquam
              laboriosam necessitatibus non eum cupiditate facere dolores.
            </Text>
            <Input
              ref={inputRef}
              placeholder="Ayo, ketik nama mu sebelum mulai!"
              size="lg"
              onChange={(e) => setValue(e.target.value)}
            />
            <Link to="/test/question" style={{ width: "100%", display: "flex" }}>
              <Spacer />
              <Button size="lg" disabled={!value} w={{ base: "100%", lg: "initial" }} colorScheme="teal">
                Mulai Tes
              </Button>
            </Link>
          </VStack>
        </Container>
      </Center>
      <Image
        h={{ base: "50vh", lg: "100vh" }}
        w={{ base: "100%", lg: "50%" }}
        objectFit="cover"
        src="https://images.unsplash.com/photo-1607688387751-c1e95ae09a42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      />
    </FlexMotion>
  );
};

export default Test;
