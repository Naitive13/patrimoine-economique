import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import BienMateriel from "../models/possessions/BienMateriel.js";
import Flux from "../models/possessions/Flux.js";

function Possession(props) {
  return (
    <>
      <tr>
        <td>{props.possesseur}</td>
        <td>{props.libelle}</td>
        <td>{props.valeur}</td>
        <td>{props.dateDebut}</td>
        <td>N/A</td>
        <td>{props.tauxAmortissement}</td>
        <td>{props.valeurFinal}</td>
      </tr>
    </>
  );
}

export default function DataTable() {
  const [possession, setPossession] = useState([]);

  useEffect(() => {
    fetch("../data/data.json")
      .then((response) => response.json())
      .then((data) => {
        const value = data[1]["data"]["possessions"];
        // value.map((e) => {
        //   e.valeurConstante == undefined
        //     ? new BienMateriel(
        //         e.possesseur,
        //         e.libelle,
        //         e.valeur,
        //         e.dateDebut,
        //         e.dateFin,
        //         e.tauxAmortissement,
        //       )
        //     : new Flux(
        //         e.possesseur,
        //         e.libelle,
        //         e.valeurConstante,
        //         e.dateDebut,
        //         e.dateFin,
        //         e.tauxAmortissement,
        //         e.jour,
        //       );
        // });
        setPossession(value);
      })
      .catch((err) => alert(err));
    // alert(possession);
    // }
  }, []);

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
          {possession.map((e) => {
            console.log("this is ", e);
            id++;

            // transforme les possessions en BienMateriel/Flux
            var item;
            if (e.valeurConstante == undefined) {
              item = new BienMateriel(
                e.possesseur,
                e.libelle,
                e.valeur,
                new Date(e.dateDebut),
                e.dateFin,
                e.tauxAmortissement,
              );
            } else {
              item = new Flux(
                e.possesseur,
                e.libelle,
                e.valeurConstante,
                new Date(e.dateDebut),
                e.dateFin,
                0,
                e.jour,
              );
            }
            // alert(item);

            //affiche les datas correctement
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
                dateDebut={item.dateDebut.toString()}
                tauxAmortissement={item.tauxAmortissement}
                valeurFinal={item.getValeur(item.dateDebut)}
              />
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
