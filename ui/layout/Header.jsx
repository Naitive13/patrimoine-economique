import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar, NavbarCollapse } from "react-bootstrap";
import Title from "../components/Title";

export default function Header() {
  return (
    <>
      <Navbar data-bs-theme="dark" bg="dark">
        <Container fluid>
          <NavbarCollapse className="ms-5">
            <Nav variant="underline" defaultActiveKey="/Patrimoine">
              <Nav.Item>
                <Nav.Link eventKey="/Patrimoine">Patrimoine</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="/Possession">Possession</Nav.Link>
              </Nav.Item>
            </Nav>
          </NavbarCollapse>
          <Navbar.Brand>
            <Title />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}
