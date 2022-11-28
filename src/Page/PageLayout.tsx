import { Box } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const PageLayout = () => {
  return (
    <>
      <Navbar />
      <Box minH="80vh">
        <Outlet />
      </Box>
      <Footer />
    </>
  );
};

export default PageLayout;
