import {
  Container,
  Heading,
  Text,
  Image,
  ListItem,
  UnorderedList,
  VStack,

} from "@chakra-ui/react";
import React from "react";

const Home = () => {
  return (
    <Container>
      <VStack spacing={5} marginTop={10}>
        <Heading as="h1" size="2xl" color="teal.400">
          Apa Itu Depresi?
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
        <Heading as="h3" size="lg" textAlign={"left"} color="teal.400">
          Faktor Penyebab Depresi
        </Heading>
        <Text textAlign={"justify"}>
          Beberapa risiko yang dapat meningkatkan risiko dari gangguan ini adalah:
        </Text>
        <UnorderedList textAlign={"justify"} ps={4} >
          <ListItem>
            <b>Masalah biologis: </b>Seseorang yang mengidap depresi kemungkinan mengalami perubahan fisik di otak. Meski begitu, tingkat signifikan dari perubahan ini belum diketahui secara pasti, meski akhirnya dapat membantu untuk menentukan sesuatu yang menyebabkannya.</ListItem>
          <ListItem><b>Gangguan kimia pada otak:</b> Neurotransmitter adalah bahan kimia pada otak yang terbentuk secara alami dan disebut-sebut dapat berperan dalam depresi. Sebuah penelitian menyebut jika perubahan dalam fungsi dan efek neurotransmitter ini dapat memengaruhi stabilitas suasana hati sehingga memengaruhi tingkat depresi pada seseorang.</ListItem>
          <ListItem><b>Gangguan hormon:</b> Perubahan atau gangguan pada keseimbangan hormon dapat memicu terjadinya depresi. Hal ini kerap terjadi selama kehamilan dan beberapa minggu atau bulan setelahnya (pascapartum). Selain itu, seseorang yang mengalami masalah tiroid, menopause, serta beberapa kondisi lainnya juga memiliki risiko tinggi pada depresi.</ListItem>
          <ListItem><b>Penyakit keturunan:</b> Masalah depresi lebih berisiko terjadi pada seseorang dengan keluarga inti yang pernah mengidapnya. Disebutkan jika gen dapat memengaruhi risiko dari penyebab depresi.</ListItem>
          <ListItem><b>Peristiwa kehidupan:</b> Stres, kematian orang yang dicintai, peristiwa yang mengecewakan (trauma), isolasi dan kurangnya dukungan dapat menyebabkan depresi.</ListItem>
          <ListItem><b>Kondisi medis:</b> Rasa sakit dan penyakit fisik yang berkelanjutan dapat menyebabkan depresi. Pengidap penyakit kronis seperti diabetes, kanker, dan penyakit Parkinson lebih rentan mengalami depresi.</ListItem>
          <ListItem><b>Obat:</b> Beberapa obat memiliki efek samping depresi. Narkoba dan alkohol juga dapat menyebabkan depresi atau memperburuknya.</ListItem>
          <ListItem><b>Kepribadian:</b> Orang yang mudah kewalahan atau mengalami kesulitan mengatasi situasi tertentu lebih rentan terhadap depresi.</ListItem>
        </UnorderedList>
        <Heading as="h3" size="lg" textAlign={"left"} color="teal.400">
          Cara Mengatasi Depresi
        </Heading>
        <Text textAlign={"justify"}>
          Terdapat beberapa cara untuk mengatasi depresi yang dapat mahasiswa lakukan yaitu :
        </Text>
        <UnorderedList textAlign={"justify"} ps={4}>
          <ListItem>
            Melakukan pola hidup teratur dengan istirahat cukup (6-8 jam sehari) dapat menurunkan tingkat depresi.
          </ListItem>
          <ListItem>
            Pola makan seimbang agar stamina tubuh terjaga.
          </ListItem>
          <ListItem>
            Olahraga dan rekreasi adalah salah satu cara untuk mencegah terjadinya depresi.
          </ListItem>
          <ListItem>
            Sikap hidup yang positif, dengan berpikir rasional dan objektif akan mencegah gejala depresi.
          </ListItem>
          <ListItem>
            Memiliki planning yang rasional dalam hidup, dan dapat menerima kondisi yang tak mungkin dapat diubah.
          </ListItem>
          <ListItem>
            Memiliki kerabat atau sahabat yang dapat sewaktu waktu saling berbagi dan saling membantu.
          </ListItem>
          <ListItem>
            Memiliki me time alias waktu untuk diri sendiri, di antara kesibukan yang padat.
          </ListItem>
          <ListItem>
            Lakukan kegiatan seperti spa, meditasi, yoga, dan relaksasi.
          </ListItem>
          <ListItem>
            Mengembangkan kehidupan spiritual 
          </ListItem>
        </UnorderedList>
      </VStack>
    </Container>
  );
};

export default Home;
