import React from "react";
import { Button } from "react-bootstrap";

export default function OrangeButton({ text, click }) {
  return (
    <>
      <Button variant="warning" className="text-white" onClick={click}>
        <h3 className="mt-2 ">{text}</h3>
      </Button>
    </>
  );
}
