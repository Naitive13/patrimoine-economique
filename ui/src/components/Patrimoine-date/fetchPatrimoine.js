export default async function fetchPatrimoine(date) {
  const url = import.meta.env.VITE_APP_API_URL;
  alert(date);
  const response = await fetch(url + "/patrimoine/" + date);
  const data = await response.json();
  console.log(data.valeurPatrimoine);
  return data.valeurPatrimoine;
}
