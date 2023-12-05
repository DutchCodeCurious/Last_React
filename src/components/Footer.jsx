import React from "react";
import { Text } from "@chakra-ui/react";
import logo from "../images/logo.png";

export const Footer = () => {
  return (
    <footer>
      <img src={logo} />
      <Text>Footer</Text>
    </footer>
  );
};
