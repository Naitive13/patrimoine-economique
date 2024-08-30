import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./layout";
import Possession from "./pages/Possession";
import Patrimoine from "./pages/Patrimoine";
import PatrimoineDate from "./pages/Patrimoine-date";
import Update from "./pages/Update";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
  {
    path: "/patrimoine/range",
    element: <Patrimoine />,
  },
  {
    path: "/patrimoine/:date",
    element: <PatrimoineDate />,
  },
  {
    path: "/possession/update",
    element: <Update />,
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
