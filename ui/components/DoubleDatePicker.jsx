import React from "react";
import { Col, FloatingLabel, Row } from "react-bootstrap";
import DatePicker from "./DatePicker";

export default function DoubleDatePicker({ date1, date2 }) {
  return (
    <>
      <Col xs={2}>
        <FloatingLabel label="dateDebut">
          <DatePicker date={date1} id="dateDebut" />
        </FloatingLabel>
      </Col>
      <Col xs={2}>
        <FloatingLabel label="dateFin">
          <DatePicker date={date2} />
        </FloatingLabel>
      </Col>
    </>
  );
}
