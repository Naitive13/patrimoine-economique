import React from "react";
import { Button } from "react-bootstrap";

export default function CloseButton({ target }) {
  async function closePossession(libelle) {
    try {
      const url = import.meta.env.VITE_APP_API_URL;
      const response = await fetch(url + "/possession/" + libelle + "/close", {
        method: "PUT",
      });
      const data = await response.json();
      alert(data.message);
    } catch (err) {
      alert(err);
    }
  }
  return (
    <>
      <Button
        variant="danger"
        className="text-white"
        onClick={() => closePossession(target)}
      >
        <h4 className="mt-2 ">Close</h4>
      </Button>
    </>
  );
}
