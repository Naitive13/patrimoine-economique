import React from "react";
import { Table } from "react-bootstrap";
import RowPossession from "./RowPossession";

function possessionOK(item) {
  try {
    if (item != undefined) {
      if (item.length >= 1) return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}

export default function List({ possessions }) {
  return (
    <>
      <Table id="table" striped bordered hover>
        <thead>
          <tr>
            <th>
              <h3>Libellé</h3>
            </th>
            <th>
              <h3>Valeur De Base</h3>
            </th>
            <th>
              <h3>Date Début</h3>
            </th>
            <th>
              <h3>Date Fin</h3>
            </th>
            <th>
              <h3>Amortissement</h3>
            </th>
          </tr>
        </thead>
        <tbody>
          {possessionOK(possessions)
            ? possessions.map((item, index) => (
                <RowPossession key={index} index={index} possession={item} />
              ))
            : "possessions indisponible"}
        </tbody>
      </Table>
    </>
  );
}
