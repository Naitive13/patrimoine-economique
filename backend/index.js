import express from "express";
import path from "path";
//fix the "__dirname is not defined error"
import { fileURLToPath } from "url";
import { dirname } from "path";

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
  const response = {
    status: 201,
    possession: { ...req.body, dateFin: null },
  };
  res.status(201).send(response);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
