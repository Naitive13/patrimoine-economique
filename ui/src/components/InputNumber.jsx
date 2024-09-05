import React from "react";
import { FloatingLabel, Form } from "react-bootstrap";

export default function InputNumber({ target, label }) {
  return (
    <>
      <FloatingLabel label={label}>
        <Form.Control type="number" ref={target} />
      </FloatingLabel>
    </>
  );
}
