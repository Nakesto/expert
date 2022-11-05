import { Box, Button, Flex, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box width="100%">
      <HStack
        maxWidth="80%"
        justifyContent="space-between"
        alignItems="center"
        margin="auto"
        paddingTop="20px"
        paddingBottom="20px"
      >
        <Text fontSize="3xl" fontWeight="bold">
          Depression
        </Text>
        <Box width="20%" />
        <Flex direction="row" flex="1" justifyContent="end" alignItems="center">
          <Link to="/">Home</Link>
          <Link to="/about" style={{ marginLeft: "20px" }}>
            <Text backgroundColor="transparent">About Us</Text>
          </Link>
          <Link to="/test" style={{ marginLeft: "40px" }}>
            <Button>Depression Test</Button>
          </Link>
        </Flex>
      </HStack>
    </Box>
  );
};

export default Navbar;
