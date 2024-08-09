import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import DataTable from "./Tableau";
import GetValeur from "./GetValeur";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <DataTable />
    <GetValeur />
  </React.StrictMode>,
);
