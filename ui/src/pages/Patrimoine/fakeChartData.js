const fakedata = { 1: 64, 2: 55, 3: 77, 4: 9, 5: 80, 6: 74 };
const labels = Object.keys(fakedata);
const values = Object.values(fakedata);
const fakeInfo = {
  labels: labels,
  datasets: [
    {
      label: "Valeur",
      data: values,
      fill: false,
      borderColor: "#FFC00677",
      tension: 0.4,
      pointBackgroundColor: "#000000bb",
    },
  ],
};

export default fakeInfo;
