export default async function createPossession(
  libelle,
  dateDebut,
  valeur,
  taux,
) {
  const req = {
    libelle: libelle.current.value,
    dateDebut: dateDebut.current.value,
    valeur: valeur.current.value,
    taux: taux.current.value,
  };
  const response = await fetch("http://localhost:3000/possession/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(req),
  });
  alert("Nouvelle possession: " + req.libelle);
}
