export default async function changePossession(newLibelle, dateFin, target) {
  try {
    const req = {
      libelle: newLibelle.current.value || null,
      dateFin: dateFin.current.value || null,
    };
    const response = await fetch("http://localhost:3000/possession/" + target, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req),
    });
    const data = await response.json();
    // console.log(data);
    alert("Possession " + target);
  } catch (err) {
    alert(err);
  }
}
