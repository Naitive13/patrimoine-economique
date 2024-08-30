// const response = await fetch("http://localhost:3000/patrimoine/range", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({ dateDebut, dateFin, jour }),
// });

import React, { useRef } from "react";
import { Col, FloatingLabel, Container, Row } from "react-bootstrap";
import InputField from "../../components/InputField";
import Layout from "../../layout";
import DatePicker from "../../components/DatePicker";
import MarginTop from "../../components/MarginTop";
import OrangeButton from "../../components/OrangeButton";

export default function Update() {
  const newLibelle = useRef();
  const oldLibell = useRef();
  const dateFin = useRef();

  async function changePossession() {
    const req = {
      libelle: newLibelle.current.value || null,
      dateFin: dateFin.current.value || null,
    };
    const response = await fetch(
      "http://localhost:3000/possession/" + oldLibell.current.value,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req),
      },
    );
    const data = await response.json();
    console.log(data);
  }
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
            <InputField label="Possession cible" target={oldLibell} />
          </Col>
        </Row>

        <MarginTop />
        <Row>
          <Col>
            <OrangeButton
              text={"Modifier La Possession"}
              click={() => changePossession()}
            />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
