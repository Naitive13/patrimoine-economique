import "bootstrap/dist/css/bootstrap.min.css";
import React, { useRef, useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import BienMateriel from "../models/possessions/BienMateriel.js";
import Flux from "../models/possessions/Flux.js";
import Patrimoine from "../models/Patrimoine.js";
import Personne from "../models/Personne.js";

export default function GetValeur(props) {
  const inputDate = useRef();
  const possesseur = new Personne("John Doe");
  const patrimoine = new Patrimoine(possesseur, []);
  const [patrimoineValue, setpatrimoineValue] = useState(0);

  function getPatrimoine() {
    const date = new Date(inputDate.current.value);
    const result = Math.round(patrimoine.getValeur(date));
    // alert(result);
    setpatrimoineValue(result);
  }

  useEffect(() => {
    fetch("../data/data.json")
      .then((response) => response.json())
      .then((data) => {
        const value = data[1]["data"]["possessions"];
        for (const e of value) {
          let item;
          if (e.valeurConstante == undefined) {
            item = new BienMateriel(
              possesseur,
              e.libelle,
              e.valeur,
              new Date(e.dateDebut),
              e.dateFin,
              e.tauxAmortissement,
            );
          } else {
            item = new Flux(
              possesseur,
              e.libelle,
              e.valeurConstante,
              new Date(e.dateDebut),
              e.dateFin,
              0,
              e.jour,
            );
          }
          patrimoine.addPossession(item);
        }
      })
      .catch((err) => alert(err));
    // alert(possession);
    // }
  });

  return (
    <div className=" fluid justify-content-center">
      <input type="date" ref={inputDate} />
      <h2>{`La valeur du patrimoine est de ${patrimoineValue}`}</h2>
      <Button variant="warning" onClick={(e) => getPatrimoine()}>
        Result
      </Button>
    </div>
  );
}
