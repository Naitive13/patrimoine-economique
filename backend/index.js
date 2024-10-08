import express from "express";
import cors from "cors";
import { dataPath } from "./data/index.js";
import createPossession from "./createPossession.js";
import updatePossession from "./updatePossession.js";
import closePossession from "./closePossession.js";
import getValeurPatrimoine from "./getValeurPatrimoine.js";
import getRange from "./getRange.js";
import "dotenv/config.js";

const app = express();
const port = process.env.PORT;
app.use(express.json());
app.use(cors());

app.get("/possession", (req, res) => {
  res.set({
    "Content-Type": "application/json",
  });
  res.sendFile(dataPath);
});

app.post("/possession", (req, res) => {
  res.set({
    "Content-Type": "application/json",
  });

  createPossession(req.body).then(() => {
    const response = {
      message: "add new possession",
      possession: { ...req.body, dateFin: null },
    };
    res.status(201).send(response);
  });
});

app.put("/possession/:libelle", (req, res) => {
  res.set({
    "Content-Type": "application/json",
  });
  const libelle = req.params.libelle;

  updatePossession(libelle, req.body)
    .then(() => {
      res.status(200).send({ message: "possession " + libelle + " updated" });
    })
    .catch((err) => res.status(400).send({ error: err }));
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
app.post("/patrimoine/range", (req, res) => {
  res.set({
    "Content-Type": "application/json",
  });
  getRange(req.body)
    .then((result) => res.status(200).send({ result: result }))
    .catch((err) => res.status(400).send({ status: "failed", error: err }));
});

app.get("/patrimoine/:date", (req, res) => {
  const jour = req.params.date;
  res.set({
    "Content-Type": "application/json",
  });
  getValeurPatrimoine(new Date(jour))
    .then((result) => {
      // console.log("i was here");
      res.status(200).send({ valeurPatrimoine: result });
    })
    .catch((err) => res.status(400).send({ status: "failed", error: err }));
});

app.listen(port, () => {
  console.log(`Patrimoine app listening on port ${port}`);
});
