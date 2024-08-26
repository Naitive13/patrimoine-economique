import express from "express";
import path from "path";
//fix the "__dirname is not defined error"
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

app.get("/possession", (req, res) => {
  res.set({
    "Content-Type": "application/json",
  });
  res.sendFile(path.join(__dirname, "../data/data.json"));
});

app.post("/possession", (req, res) => {
  res.send("You created a possession!");
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
