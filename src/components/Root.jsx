import React from "react";
import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation";
import { Box } from "@chakra-ui/react";
import { Footer } from "./Footer";

export const Root = () => {
  return (
    <Box className="App">
      <Navigation />
      <Box className="Body">
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};
