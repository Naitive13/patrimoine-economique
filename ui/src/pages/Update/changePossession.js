export default async function changePossession(newLibelle, dateFin, target) {
  try {
    const url = import.meta.env.VITE_APP_API_URL;
    const req = {
      libelle: newLibelle.current.value || null,
      dateFin: dateFin.current.value || null,
    };
    const response = await fetch(url + "/possession/" + target, {
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
