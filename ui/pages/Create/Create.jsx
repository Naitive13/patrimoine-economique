import React, { useRef } from "react";
import { Col, FloatingLabel, Container, Row } from "react-bootstrap";
import InputField from "../../components/InputField";
import Layout from "../../layout";
import DatePicker from "../../components/DatePicker";
import MarginTop from "../../components/MarginTop";
import OrangeButton from "../../components/OrangeButton";
import InputNumber from "../../components/InputNumber";

export default function Create() {
  const libelle = useRef();
  const dateDebut = useRef();
  const valeur = useRef();
  const taux = useRef();

  async function createPossession() {
    const req = {
      libelle: libelle.current.value,
      dateDebut: dateDebut.current.value,
      valeur: valeur.current.value,
      taux: taux.current.value,
    };
    const response = await fetch("http://localhost:3000/possession/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req),
    });
    const data = await response.json();
    console.log(data);
  }
  return (
    <Layout>
      <Container>
        <MarginTop />
        <Row>
          <Col>
            <InputField label="Libelle" target={libelle} />
          </Col>
        </Row>

        <MarginTop />
        <Row>
          <Col>
            <InputNumber label="Valeur" target={valeur} />
          </Col>
        </Row>

        <MarginTop />
        <Row>
          <Col>
            <FloatingLabel label="DateDebut">
              <DatePicker date={dateDebut} />
            </FloatingLabel>
          </Col>
        </Row>

        <MarginTop />
        <Row>
          <Col>
            <InputNumber label="Taux" target={taux} />
          </Col>
        </Row>

        <MarginTop />
        <Row>
          <Col>
            <OrangeButton
              text={"Ajouter La Possession"}
              click={() => createPossession()}
            />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
