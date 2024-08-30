import React from "react";
import { Form } from "react-bootstrap";

export default function DatePicker({ date }) {
  return (
    <>
      <Form.Control type="date" ref={date} />
    </>
  );
}
