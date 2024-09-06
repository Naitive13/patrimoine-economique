import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Home from "./Home";

export default function Layout({ children }) {
  // console.log(children);
  return (
    <>
      <Header />
      {children == undefined ? <Home /> : children}
    </>
  );
}
