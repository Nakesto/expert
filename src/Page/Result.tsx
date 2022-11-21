import { Box, Center, Text, VStack } from "@chakra-ui/react";
import { fade, transition } from "../Shared/Animation";
import { FlexMotion } from "../Shared/ChakraMotion";

const Result: React.FC = () => {
  return (
    <Center>
      <VStack>
        <Text fontSize="2xl">Hasil Tes</Text>
        <Text fontSize="xl">Anda memiliki gejala depresi</Text>
        <Text fontSize="xl">Silahkan hubungi psikolog</Text>
      </VStack>
    </Center>
  );
};

export default Result;
