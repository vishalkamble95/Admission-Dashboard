import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const TrendLineChart = ({ data }) => (
  <div className="w-full h-64 bg-white shadow-md rounded-2xl p-8">
    <h3 className="text-lg font-semibold mb-2">Application Trends</h3>
    {data.length === 0 ? (
      <p className="text-gray-500">No data available for selected dates.</p>
    ) : (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="applicants"
            stroke="#10B981"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    )}
  </div>
);

export default TrendLineChart;
