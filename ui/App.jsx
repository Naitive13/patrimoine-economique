import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./layout";
import Possession from "./pages/Possession";
import Patrimoine from "./pages/Patrimoine";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Possession />,
  },
  {
    path: "/patrimoine",
    element: <Patrimoine />,
  },
  {
    path: "/possession",
    element: <Possession />,
  },
]);

export default function App() {
  return (
    <>
      <Layout>
        <RouterProvider router={route} />
      </Layout>
    </>
  );
}
