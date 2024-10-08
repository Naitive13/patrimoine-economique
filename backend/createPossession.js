import Personne from "../models/Personne.js";
import Possession from "../models/possessions/Possession.js";
import { dataPath, readFile, writeFile } from "./data/index.js";

const possesseur = new Personne("John Doe");

export default async function createPossession(possessionInfo) {
  try {
    const libelle = possessionInfo.libelle;
    const valeur = possessionInfo.valeur;
    const dateDebut = new Date(possessionInfo.dateDebut);
    const taux = possessionInfo.taux;
    const o = { libelle, valeur, dateDebut, taux };

    for (const i of ["libelle", "valeur", "dateDebut", "taux"]) {
      if (o[i] == undefined) {
        throw new Error("missing property " + i);
      }
    }

    const newPossession = new Possession(
      possesseur,
      libelle,
      valeur,
      dateDebut,
      null,
      taux,
    );

    const response = await readFile(dataPath);
    const list = response.data;
    list[1].data.possessions.push(newPossession);
    const status = await writeFile(dataPath, response.data);
    return status;
  } catch (err) {
    console.error(possessionInfo);
    console.log(err);
  }
}
