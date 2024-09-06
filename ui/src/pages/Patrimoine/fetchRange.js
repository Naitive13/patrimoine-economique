export default async function fetchRange(jour, dateDebut, dateFin) {
  const url = import.meta.env.VITE_APP_API_URL;
  const start = dateDebut.current.value;
  const end = dateFin.current.value;
  const day = jour.current.value;

  if (start == "" || end == "" || start > end) {
    alert("not ok");
  } else {
    const req = {
      dateDebut: start,
      dateFin: end,
      jour: day,
    };
    // alert(start);
    try {
      const response = await fetch(url + "/patrimoine/range", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
      });
      const result = await response.json();
      // console.log(result);
      return result.result;
    } catch (err) {
      alert(err);
    }
  }
}
