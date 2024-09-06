export default function chartData(data) {
  return {
    labels: Object.keys(data),
    datasets: [
      {
        label: "Patrimoine",
        data: Object.values(data),
        fill: false,
        borderColor: "#FFC00677",
        tension: 0.4,
        pointBackgroundColor: "#000000bb",
      },
    ],
  };
}
