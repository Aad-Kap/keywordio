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

var myOptions = [["ads", "google_ads-icon.svg", "Google Ads"]];

var myTemplate =
  "<div class='jqcs_option' data-select-value='$0' style='background-image:url(example_icons/$1);'>$2</div>";

$.customSelect({
  identifier: "demo",
  selector: "#analyticsSelect",
  placeholder: "Select Analytics",
  options: myOptions,
  template: myTemplate,
});

var rangeOptions = [["dummy-range", "", "Dummy Range"]];

$.customSelect({
  identifier: "range",
  selector: "#rangeSelect",
  placeholder: "Select Range",
  options: rangeOptions,
  template: myTemplate,
});
