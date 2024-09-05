import { dataPath, readFile, writeFile } from "./data/index.js";

export default async function updatePossession(target, value) {
  const response = await readFile(dataPath);
  const data = response.data;
  const possessions = data[1].data.possessions;
  for (const possession of possessions) {
    if (possession.libelle == target) {
      if (value.libelle != null) {
        possession.libelle = value.libelle;
      }
      if (value.dateFin != null) {
        possession.dateFin = new Date(value.dateFin);
      }
    }
  }
  // list[1].data.possessions.push(newPossession);
  const status = await writeFile(dataPath, data);
  return status;
}
