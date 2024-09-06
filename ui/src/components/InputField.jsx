import React from "react";
import { FloatingLabel, Form } from "react-bootstrap";

export default function InputField({ target, label }) {
  return (
    <>
      <FloatingLabel label={label}>
        <Form.Control type="text" ref={target} />
      </FloatingLabel>
    </>
  );
}
