import fs from "node:fs/promises";
import path from "path";

//fix the "__dirname is not defined error"
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function readFile(path) {
  try {
    const data = await fs.readFile(path, { encoding: "utf8" });
    return {
      status: "OK",
      data: JSON.parse(data),
    };
  } catch (err) {
    return {
      status: "ERROR",
      error: err,
    };
  }
}

async function writeFile(path, data) {
  try {
    await fs.writeFile(path, JSON.stringify(data), {
      encoding: "utf8",
    });
    return {
      status: "OK",
    };
  } catch (err) {
    return {
      status: "ERROR",
      error: err,
    };
  }
}

const dataPath = path.join(__dirname, "./data.json");

export { readFile, writeFile, dataPath };
/*
TODO:
react bootstrap
une page avec un tableau

liste de possession sous forme de tableau bootstrap
libelle, valeur, date debut - fin, taux amortissement, valeur final

liste valeur du patrimoine
date picker avec bouton valider qui permet de calculer le patrimoine

video qui presente comment ca marche
envoyer par mail avec le code source

data sous forme de json et persistance

*/
