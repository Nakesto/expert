import React from "react";
import { Box, Flex, Image, Stack, Heading, Text, Center, Button, Container, transition } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { fade } from "../Shared/Animation";
import { FlexMotion } from "../Shared/ChakraMotion";

const Test = () => {
  return (
    <FlexMotion h="100vh" variants={fade} animate="show" exit="hidden" initial="hidden" transition={transition}>
      <Center h="100%" w="50%">
        <Container>
          <Stack direction="column" alignItems="start" spacing="2rem">
            <Heading>Tes Depresi Untuk Mahasiswa</Heading>
            <Text fontSize="xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. In obcaecati beatae quis, eos ut minima libero
              quasi perferendis eligendi dolore iusto aperiam voluptas alias, expedita, quibusdam nostrum dolorum omnis?
              Iure obcaecati nemo impedit natus reiciendis dolorem! Temporibus harum perferendis ex qui iure, quisquam
              laboriosam necessitatibus non eum cupiditate facere dolores.
            </Text>
            <Link to="/test/question">
              <Button size="lg">Mulai Tes</Button>
            </Link>
          </Stack>
        </Container>
      </Center>
      <Image
        h="100%"
        w="50%"
        overflow="hidden"
        objectFit="cover"
        src="https://images.unsplash.com/photo-1607688387751-c1e95ae09a42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      />
    </FlexMotion>
  );
};

export default Test;
