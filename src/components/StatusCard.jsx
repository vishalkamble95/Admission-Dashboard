import React from "react";

const getColor = (count) => {
  if (count > 1000) return "bg-red-500";
  if (count > 500) return "bg-orange-400";
  return "bg-blue-500";
};

const StatusCard = ({ title, count }) => {
  return (
    <div className={`rounded-2xl shadow-md text-white p-4 ${getColor(count)}`}>
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-3xl font-bold">{count}</p>
    </div>
  );
};

export default StatusCard;
