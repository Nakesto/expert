import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  Divider,
  Heading,
  ListItem,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { result } from "../data/knowledge";

const Result: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const resultData = location.state;
  const [diagnosa, setDiagnosa] = useState<any>();

  useEffect(() => {
    if (resultData == null) {
      navigate("/");
    } else {
      setDiagnosa(result.find((res) => resultData.certaintyFactor < res.value));
    }

    return () => {
      setDiagnosa("");
    };
  }, [resultData, navigate]);

  return (
    <Container py={{ base: "2rem", lg: "5rem" }}>
      <Heading>Hi, {resultData.userName}!</Heading>
      <VStack alignItems="start" spacing="2rem" mt="2rem">
        <Box>
          <Heading fontSize="2xl">Hasil Tes</Heading>
          <Divider my="0.5rem" />
          <Text mt="1rem">
            Kondisi mental kamu saat ini adalah <b style={{ textTransform: "lowercase" }}>{diagnosa?.label}</b>
          </Text>
        </Box>
        <Box>
          <Heading fontSize="2xl">Diagnosis</Heading>
          <Divider my="0.5rem" />
          <TableContainer>
            <Table>
              <Thead>
                <Tr>
                  <Th>Code</Th>
                  <Th>Depression Level</Th>
                  <Th>Certainty Factor</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>{diagnosa?.id}</Td>
                  <Td>{diagnosa?.label}</Td>
                  <Td>{resultData.certaintyFactor}</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
        <Box>
          <Heading fontSize="2xl">Gejala yang dialami</Heading>
          <Divider my="0.5rem" />
          <UnorderedList spacing="0.2rem" mt="1rem">
            {resultData?.answers
              .filter((item: any) => Number(item.answer) > 0)
              .map((answer: any, idx: number) => (
                <ListItem key={`gejala-${idx}`}>{answer.gejala}</ListItem>
              ))}
          </UnorderedList>
        </Box>
        <Box>
          <Heading fontSize="2xl">Rekomendasi </Heading>
          <Divider my="0.5rem" />
          <Text mt="1rem">{diagnosa?.recommendations}</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Result;
