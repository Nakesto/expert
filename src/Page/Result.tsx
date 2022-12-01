import {
  Box,
  Center,
  Container,
  Divider,
  Heading,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { fade, transition } from "../Shared/Animation";
import { FlexMotion } from "../Shared/ChakraMotion";

const Result: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const resultData = location.state;
  const [diagnosa, setDiagnosa] = useState("");

  useEffect(() => {
    if (resultData == null) {
      navigate("/");
    } else {
      if (resultData.certaintyFactor > 0.6) {
        setDiagnosa("Anda mengalami stres berat");
      } else if (resultData.certaintyFactor > 0.4) {
        setDiagnosa("Anda mengalami stres sedang");
      } else if (resultData.certaintyFactor > -0.2) {
        setDiagnosa("Anda mengalami stres ringan");
      } else {
        setDiagnosa("Anda tidak mengalami stress");
      }
    }

    return () => {
      setDiagnosa("");
    };
  }, [resultData, navigate]);

  return (
    <Container>
      <VStack alignItems="start" spacing="2rem">
        <Box>
          <Heading>Hasil Tes Level Depression </Heading>
          <Divider />
        </Box>
        <Box mt="2rem">
          <Heading fontSize="xl">Gejala yang dirasakan</Heading>
          <UnorderedList spacing="0.2rem" mt="1rem">
            {resultData?.answers
              .filter((item: any) => Number(item.answer) > 0)
              .map((answer: any, idx: number) => (
                <ListItem key={`gejala-${idx}`}>{answer.gejala}</ListItem>
              ))}
          </UnorderedList>
        </Box>
        <Box>
          <Heading fontSize="xl">Hasil Diagnosis</Heading>
          <Text mt="1rem">{diagnosa}</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Result;
