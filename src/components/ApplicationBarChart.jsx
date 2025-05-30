import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ApplicationBarChart = ({ data }) => (
  <div className="w-full h-64 bg-white shadow-md rounded-2xl p-8">
    <h3 className="text-lg font-semibold mb-2">Applications per Program</h3>
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <XAxis dataKey="program" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="applicants" fill="#60A5FA" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default ApplicationBarChart;
