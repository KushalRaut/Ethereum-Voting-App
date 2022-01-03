import "./PieChart.css";
import DonutChart from "react-donut-chart";

export default function PieChart() {
  return (
    <div className="pie-chart">
      <div className="chart_container w-50">
        <DonutChart
          className="dchart m-4"
          width={500}
          height={500}
          innerRadius={0.5}
          selectedOffset={0}
          outerRadius={0.7}
          colors={["#fdcc0a", "#eb5756", "#6acf95", "#0d57b2", "#c6c6c6"]}
          data={[
            {
              label: "Gagan Thapa",
              value: 10,
            },
            {
              label: "Sher Bdr. Deuba",
              value: 15,
            },
            {
              label: "KP Oli",
              value: 13,
            },
            {
              label: "Baburam Bhattarai",
              value: 7,
            },
            {
              label: "Puspa K. Dahal",
              value: 9,
            },
            {
              label: "Bidya Bhandari",
              value: 11,
            },
            {
              label: "Kamal Thapa",
              value: 8,
            },
          ]}
        />
      </div>
    </div>
  );
}
