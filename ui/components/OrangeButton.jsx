import React from "react";
import { Badge, Button } from "react-bootstrap";

export default function OrangeButton({ text }) {
  return (
    <>
      <Button variant="warning" className="text-white">
        <h3 className="mt-2 ">{text}</h3>
      </Button>
    </>
  );
}
