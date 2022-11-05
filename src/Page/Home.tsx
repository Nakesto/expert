import {
  Container,
  Heading,
  Highlight,
  Text,
  Stack,
  Image,
  Flex,
} from "@chakra-ui/react";
import React from "react";

const Home = () => {
  return (
    <Container>
      <Stack spacing={5}>
        <Heading as="h3" size="lg">
          Depresi
        </Heading>
        <Text textAlign={"justify"}>
          Depresi atau dalam istilah medis disebut sebagai gangguan depresi
          mayor adalah gangguan mental yang mempengaruhi perasaan, cara berpikir
          dan cara bertindak seseorang. Individu yang mengalami depresi
          cenderung merasa sedih dan kehilangan minat untuk melakukan aktivitas
          yang biasa dilakukan. Kondisi ini kemudian dapat menyebabkan berbagai
          masalah emosional dan fisik hingga menurunkan kinerja pengidapnya.
          Efek depresi dapat berlangsung lama atau bahkan berulang dan mampu
          memengaruhi kemampuan seseorang menjalani aktivitas sehari-hari.
          Depresi dapat memburuk dan bertahan lebih lama bila tak ditangani
          dengan tepat. Dalam kasus yang parah depresi memicu pengidapnya untuk
          melukai diri sendiri hingga menimbulkan pikiran bunuh diri.
        </Text>
        <Image
          h="100%"
          w="100%"
          //overflow="hidden"
          objectFit="cover"
          src="https://ciputrahospital.com/wp-content/uploads/2021/01/shutterstock_1347450608resizee.jpg"
        />
        <Text textAlign={"justify"}>
          Depresi atau secara medis dikenal sebagai depresi berat, adalah
          gangguan mental yang memengaruhi perasaan, pemikiran, dan perilaku
          seseorang. 4.444 orang dengan depresi cenderung merasa sedih dan
          kehilangan minat dalam aktivitas normal. Kondisi ini dapat menyebabkan
          berbagai masalah emosional dan fisik yang mempengaruhi kinerja pasien,
          mempengaruhi kemampuan. Depresi bisa memburuk dan bertahan lebih lama
          jika tidak ditangani dengan benar. Dalam kasus yang parah, depresi
          dapat menyebabkan orang yang terkena melukai diri sendiri, yang
          mengarah ke pikiran untuk bunuh diri.
        </Text>
      </Stack>
    </Container>
  );
};

export default Home;
