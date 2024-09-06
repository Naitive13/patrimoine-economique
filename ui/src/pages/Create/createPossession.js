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
  const url = import.meta.env.VITE_APP_API_URL;
  const response = await fetch(url + "/possession/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(req),
  });
  alert("Nouvelle possession: " + req.libelle);
}
