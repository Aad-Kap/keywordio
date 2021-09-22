const labels = ["January", "February", "March", "April", "May", "June"];
const data = {
  labels: labels,
  datasets: [
    {
      backgroundColor: "#399fff",
      borderColor: "#399fff",
      data: [0, 10, 5, 2, 20, 30, 45],
      tension: 0.5,
    },
  ],
};

const config = {
  type: "line",
  data: data,
  options: {},
};
var myChart = new Chart(document.getElementById("myChart"), config);



console.log("hi");
