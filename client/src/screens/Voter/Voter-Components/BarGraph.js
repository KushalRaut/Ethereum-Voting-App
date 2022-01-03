import "./BarGraph.css";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { name: "GT", uv: 10 },
  { name: "SBD", uv: 15 },
  { name: "KP Oli", uv: 13 },
  { name: "BRB", uv: 7 },
  { name: "PKD", uv: 9 },
  { name: "BDB", uv: 11 },
  { name: "KT", uv: 8 },
];

export default function BarGraph() {
  return (
    <div className="w-50">
      <LineChart
        width={420}
        height={500}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line
          connectNulls
          type="monotone"
          dataKey="uv"
          stroke="#8884d8"
          fill="#8884d8"
        />
      </LineChart>
    </div>
  );
}
