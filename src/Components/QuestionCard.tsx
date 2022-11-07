import React from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Stack, Heading, Button, Text, Radio, RadioGroup, Box } from "@chakra-ui/react";

export const QuestionCard = () => {
  const { id } = useParams();
  return (
    <Container>
      <Stack direction="column" alignItems="start" spacing="2rem">
        <Heading>Siapa nama anjing kamu?</Heading>
        <RadioGroup w="100%">
          <Stack direction="column" spacing="1rem">
            <Box bgColor="blue.50" padding="1rem" w="100%" borderRadius="15px">
              <Radio value="1">Aku tidak punya anjing</Radio>
            </Box>
            <Box bgColor="gray.50" padding="1rem" w="100%" borderRadius="15px">
              <Radio value="2">Aku tidak punya anjing</Radio>
            </Box>
            <Box bgColor="gray.50" padding="1rem" w="100%" borderRadius="15px">
              <Radio value="3">Aku tidak punya anjing</Radio>
            </Box>
          </Stack>
        </RadioGroup>
        <Link to="/question">
          <Button size="lg">Mulai Tes</Button>
        </Link>
      </Stack>
    </Container>
  );
};
