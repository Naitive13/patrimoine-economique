import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./layout";
import Possession from "./pages/Possession";
import Patrimoine from "./pages/Patrimoine";
import Update from "./pages/Update";
import Create from "./pages/Create";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
  {
    path: "/patrimoine",
    element: <Patrimoine />,
  },
  {
    path: "/possession/update",
    element: <Update />,
  },
  {
    path: "/possession/create",
    element: <Create />,
  },
  {
    path: "/possession",
    element: <Possession />,
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}
