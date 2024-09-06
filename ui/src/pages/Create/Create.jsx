import React, { useRef } from "react";
import { Col, FloatingLabel, Container, Row } from "react-bootstrap";
import InputField from "../../components/InputField";
import Layout from "../../layout";
import DatePicker from "../../components/DatePicker";
import MarginTop from "../../components/MarginTop";
import OrangeButton from "../../components/OrangeButton";
import InputNumber from "../../components/InputNumber";
import createPossession from "./createPossession";

export default function Create() {
  const libelle = useRef();
  const dateDebut = useRef();
  const valeur = useRef();
  const taux = useRef();

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
              click={() => createPossession(libelle, dateDebut, valeur, taux)}
            />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
