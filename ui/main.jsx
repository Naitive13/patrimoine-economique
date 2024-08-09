import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import DataTable from "./Tableau";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <DataTable />
  </React.StrictMode>,
);
