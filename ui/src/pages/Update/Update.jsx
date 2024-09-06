import React, { useRef } from "react";
import { Col, FloatingLabel, Container, Row } from "react-bootstrap";
import InputField from "../../components/InputField";
import Layout from "../../layout";
import DatePicker from "../../components/DatePicker";
import MarginTop from "../../components/MarginTop";
import OrangeButton from "../../components/OrangeButton";
import { useLocation } from "react-router";
import changePossession from "./changePossession";

export default function Update() {
  const newLibelle = useRef();
  const dateFin = useRef();
  const target = useLocation().pathname.split("/")[2];

  return (
    <Layout>
      <Container>
        <MarginTop />
        <Row>
          <Col>
            <InputField label="Libelle" target={newLibelle} />
          </Col>
        </Row>

        <MarginTop />
        <Row>
          <Col>
            <FloatingLabel label="DateFin">
              <DatePicker date={dateFin} />
            </FloatingLabel>
          </Col>
        </Row>

        <MarginTop />
        <Row>
          <Col>
            <OrangeButton
              text={"Modifier La Possession"}
              click={() => changePossession(newLibelle, dateFin, target)}
            />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
