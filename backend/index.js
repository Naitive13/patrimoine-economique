import express from "express";
import path from "path";
//fix the "__dirname is not defined error"
import { fileURLToPath } from "url";
import { dirname } from "path";
import createPossession from "./createPossession.js";
import updatePossession from "./updatePossession.js";
import closePossession from "./closePossession.js";
import getValeurPatrimoine from "./getValeurPatrimoine.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;
app.use(express.json());

app.get("/possession", (req, res) => {
  res.set({
    "Content-Type": "application/json",
  });
  res.sendFile(path.join(__dirname, "../data/data.json"));
});

app.post("/possession", (req, res) => {
  res.set({
    "Content-Type": "application/json",
  });

  createPossession(req.body);

  const response = {
    message: "add new possession",
    possession: { ...req.body, dateFin: null },
  };
  res.status(201).send(response);
});

app.put("/possession/:libelle", (req, res) => {
  res.set({
    "Content-Type": "application/json",
  });
  const libelle = req.params.libelle;

  try {
    updatePossession(libelle, req.body);
    res.status(200).send({ message: "possession " + libelle + " updated" });
  } catch (error) {
    res.status(400).send({ error: error });
  }
});

app.put("/possession/:libelle/close", (req, res) => {
  const libelle = req.params.libelle;
  res.set({
    "Content-Type": "application/json",
  });

  try {
    closePossession(libelle);
    res.status(200).send({ message: "possession " + libelle + " closed" });
  } catch (error) {
    res.status(400).send({ error: error });
  }
});

app.get("/patrimoine/:date", (req, res) => {
  const jour = req.params.date;
  res.set({
    "Content-Type": "application/json",
  });

  try {
    getValeurPatrimoine(new Date(jour)).then((result) => {
      res.status(200).send({ valeurPatrimoine: result });
    });
  } catch (err) {
    res.status(400).send({ status: "failed", error: err });
  }
});

app.get("/patrimoine/range", (req, res) => {
  res.set({
    "Content-Type": "application/json",
  });

  try {
    res.status(200);
  } catch (err) {
    res.status(400).send({ status: "failed", error: err });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
