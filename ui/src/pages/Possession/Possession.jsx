import React, { useEffect, useState } from "react";
import Layout from "../../layout";
import List from "../../components/List";
import { LinkContainer } from "react-router-bootstrap";
import { Col, Container, Nav, Row } from "react-bootstrap";
import OrangeButton from "../../components/OrangeButton";
import MarginTop from "../../components/MarginTop";

export default function Possession() {
  const url = import.meta.env.VITE_APP_API_URL;
  const [possessions, setpossessions] = useState([]);
  useEffect(() => {
    fetch(url + "/possession")
      .then((res) => res.json())
      .then((data) => {
        const item = data[1].data.possessions;
        setpossessions(item);
      });
  });

  return (
    <>
      <Layout>
        <Container>
          <MarginTop />
          <Row>
            <Col xs={4}></Col>
            <Col xs={5}>
              <LinkContainer to="/possession/create">
                <Nav.Link>
                  <OrangeButton text="Ajouter une possession" />
                </Nav.Link>
              </LinkContainer>
            </Col>
          </Row>

          <MarginTop />
          <List possessions={possessions} />
        </Container>
      </Layout>
    </>
  );
}
