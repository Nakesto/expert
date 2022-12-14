import { Box, Button, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box width="100%" bgColor="teal.400" as="nav">
      <Stack
        direction={{ base: "column", md: "row" }}
        maxWidth="80%"
        justifyContent="space-between"
        alignItems="center"
        margin="auto"
        paddingTop="20px"
        paddingBottom="20px"
      >
        <Text fontSize="3xl" fontWeight="bold" textColor="white">
          Depresi
        </Text>
        <Box width="20%" />
        <Flex direction="row" flex="1" justifyContent="end" alignItems="center">
          <Link to="/">
            <Text backgroundColor="transparent" textColor="white" fontWeight="bold">
              Beranda
            </Text>
          </Link>
          <Link to="/test" style={{ marginLeft: "40px" }}>
            <Button>
              <Text textColor="teal.400">Tes Depresi</Text>
            </Button>
          </Link>
        </Flex>
      </Stack>
    </Box>
  );
};

export default Navbar;
