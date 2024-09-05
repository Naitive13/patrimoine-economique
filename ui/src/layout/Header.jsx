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
              <LinkContainer to="/patrimoine/range">
                <Nav.Link>Patrimoine Chart</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/patrimoine/date">
                <Nav.Link>Patrimoine Brute</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/possession">
                <Nav.Link>Possessions</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/possession/update">
                <Nav.Link>Edition</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/possession/create">
                <Nav.Link>Creation</Nav.Link>
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
