import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./main.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

import { ActiveUserProvider } from "./context/activeUser.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ActiveUserProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </ActiveUserProvider>
  </React.StrictMode>
);
