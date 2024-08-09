import React from "react";
import { Navbar, Button, Container } from "react-bootstrap/";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Header() {
  return (
    <>
      <Navbar className="bg-secondary text-light">
        <Container>
          <h1>Patrimoine</h1>
          <Button>Help</Button>
        </Container>
      </Navbar>
    </>
  );
}
