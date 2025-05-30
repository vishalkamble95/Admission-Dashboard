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
        {/* Show program names (BTech, MBA...) on X-axis */}
        <XAxis dataKey="program" />
        {/* Automatically renders Y-axis scale based on your data values */}
        <YAxis />
        <Tooltip />
        <Bar
          dataKey="applicants" // 👉 This tells Recharts: "Each bar's height should come from the 'applicants' value in the data"
          fill="#60A5FA" // 🎨 This sets the color of the bars to a light blue (Tailwind's blue-400)
        />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default ApplicationBarChart;
