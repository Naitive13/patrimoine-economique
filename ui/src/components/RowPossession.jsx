import React from "react";
import CloseButton from "./CloseButton";
import OrangeButton from "./OrangeButton";
import { LinkContainer } from "react-router-bootstrap";
import { Nav } from "react-bootstrap";
export default function RowPossession({ index, possession }) {
  return (
    <>
      <tr key={index}>
        <td>{possession.libelle}</td>
        <td>
          {possession.valeurConstante != undefined
            ? possession.valeurConstante
            : possession.valeur}
        </td>
        {/**Initialise le flux a 0 et biens materiel a sa valeur iniitiale */}
        <td>{new Date(possession.dateDebut).toLocaleDateString()}</td>
        <td>
          {possession.dateFin
            ? new Date(possession.dateFin).toLocaleDateString()
            : "N/A"}
        </td>
        <td>
          {possession.tauxAmortissement
            ? `${possession.tauxAmortissement}%`
            : "0%"}
        </td>
        <td>
          <CloseButton target={possession.libelle} />
        </td>
        <td>
          <LinkContainer to={`/possession/${possession.libelle}/update`}>
            <Nav.Link>
              <OrangeButton text="Modifier" />
            </Nav.Link>
          </LinkContainer>
        </td>
      </tr>
    </>
  );
}
