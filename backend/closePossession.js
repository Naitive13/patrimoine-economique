import { readFile, writeFile, dataPath } from "./data/index.js";

export default async function closePossession(target) {
  const response = await readFile(dataPath);
  const data = response.data;
  const possessions = data[1].data.possessions;
  for (const possession of possessions) {
    if (possession.libelle == target) {
      possession.dateFin = new Date();
    }
  }
  // list[1].data.possessions.push(newPossession);
  const status = await writeFile(dataPath, data);
  return status;
}
