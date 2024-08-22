import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
