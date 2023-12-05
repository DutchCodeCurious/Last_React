import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Styles of the site imports
import { Root } from "./components/Root";
import "./style.scss";

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
        path: "/event/:id",
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

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
