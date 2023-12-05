import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./components/Root";

// Pages import
import { AddEventPage } from "./pages/AddEventPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { EventPage } from "./pages/EventPage";
import { EventsPage } from "./pages/EventsPage";
import { UserPage } from "./pages/UserPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <EventsPage />,
        // loader: postListLoader,
      },
      {
        path: "/event/:eventId",
        element: <EventPage />,
        // loader: postLoader,
        // action: addComment,
      },
      {
        path: "/user",
        element: <UserPage />,
      },
      {
        path: "AddEvent",
        element: <AddEventPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
// @ts-ignore
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
