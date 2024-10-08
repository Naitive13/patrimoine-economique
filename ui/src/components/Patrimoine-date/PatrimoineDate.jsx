import React, { useState } from "react";
import Layout from "../../layout";
import DatePicker from "../../components/DatePicker";
import OrangeButton from "../../components/OrangeButton";
import { Col, Row } from "react-bootstrap";
import MarginTop from "../../components/MarginTop";
import { useRef } from "react";
import fetchPatrimoine from "./fetchPatrimoine";

export default function PatrimoineDate() {
  const [patrimoine, setpatrimoine] = useState("?");
  const date = useRef();
  async function clickUpdate() {
    const value = await fetchPatrimoine(date.current.value);
    setpatrimoine(value);
  }

  return (
    <>
      <Row>
        <Col xs={3} className="mt-3">
          <DatePicker date={date} />
        </Col>
        <Col xs={5}>
          <h3 className="mt-3">{`Votre patrimoine est de: ${patrimoine}`}</h3>
        </Col>
        <Col xs={4}>
          <OrangeButton
            click={() => clickUpdate()}
            text={"Calculer votre Patrimoine"}
          />{" "}
        </Col>
      </Row>
      <Row></Row>
    </>
  );
}
