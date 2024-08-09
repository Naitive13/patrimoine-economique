import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useRef, useState } from "react";
import { Table } from "react-bootstrap";
function Possession(props) {
  return (
    <>
      <tr>
        <td>{props.possesseur}</td>
        <td>{props.libelle}</td>
        <td>{props.valeur}</td>
        <td>{props.dateDebut}</td>
        <td>{props.dateFin}</td>
        <td>{props.tauxAmortissement}</td>
        <td>342</td>
      </tr>
    </>
  );
}

export default function DataTable(props) {
  const [possession, setPossession] = useState([]);
  const [patrimoineValue, setPatrimoineValue] = useState("");
  var a = useRef([]);

  useEffect(() => {
    if (possession.length == 0) {
      fetch("../data/data.json")
        .then((response) => response.json())
        .then((data) => {
          a.current = data[1]["data"]["possessions"];
          setPossession(a.current);
        })
        .catch((err) => alert(err));
      alert(possession);
    }
  }, [possession]);

  let id = 0;

  return (
    <>
      <Table bordered striped>
        <thead>
          <tr>
            <td>Proprietaire</td>
            <td>Possession</td>
            <td>Valeur Initiale</td>
            <td>Date de Debut</td>
            <td>Date de Fin</td>
            <td>Taux amortissement</td>
            <td>Valeur Finale</td>
          </tr>
        </thead>
        <tbody>
          {possession.map((item) => {
            // console.log("this is ", item);
            id++;
            return (
              <Possession
                key={id}
                possesseur={item.possesseur.nom}
                libelle={item.libelle}
                valeur={
                  item.valeurConstante == undefined
                    ? item.valeur
                    : item.valeurConstante
                }
                dateDebut={item.dateDebut}
                dateFin={item.dateFin}
                tauxAmortissement={item.tauxAmortissement}
              />
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
