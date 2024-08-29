import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar, NavbarCollapse } from "react-bootstrap";
import Title from "../components/Title";
import { LinkContainer } from "react-router-bootstrap";

export default function Header() {
  return (
    <>
      <Navbar data-bs-theme="dark" bg="dark">
        <Container fluid>
          <NavbarCollapse className="ms-5">
            <Nav variant="underline" defaultActiveKey="/Patrimoine">
              <LinkContainer to="/patrimoine">
                <Nav.Link>Patrimoine</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/possession">
                <Nav.Link>Possessions</Nav.Link>
              </LinkContainer>
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
