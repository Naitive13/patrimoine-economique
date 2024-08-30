import React from "react";
import { Col, Form, Row } from "react-bootstrap";

export default function DatePicker({ ref }) {
  return (
    <>
      <Form.Control type="date" ref={ref} />
    </>
  );
}
