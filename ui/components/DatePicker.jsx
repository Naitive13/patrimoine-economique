import React from "react";
import { Col, Form, Row } from "react-bootstrap";

export default function DatePicker({ date }) {
  return (
    <>
      <Form.Control type="date" ref={date} />
    </>
  );
}
