export default async function fetchPatrimoine(date) {
  alert(date);
  const response = await fetch("http://localhost:3000/patrimoine/" + date);
  const data = await response.json();
  console.log(data.valeurPatrimoine);
  return data.valeurPatrimoine;
}
