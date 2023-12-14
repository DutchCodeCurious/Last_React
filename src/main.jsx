import React from "react";
import { ToastContainer } from "react-toastify";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Styles of the site imports
import { Root } from "./components/Root";
import "./style.scss";
import "react-toastify/dist/ReactToastify.css";

// Pages import
import { AddEventPage } from "./pages/AddEventPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { EventPage } from "./pages/EventPage";
import { EventsPage } from "./pages/EventsPage";
import { UserPage } from "./pages/UserPage";
import { EditEventPage } from "./pages/EditEventPage";

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
      },
      {
        path: "/event/:id/edit",
        element: <EditEventPage />,
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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
