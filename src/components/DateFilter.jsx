import React from "react";

const DateFilter = ({ fromDate, toDate, onFromDateChange, onToDateChange }) => (
  <div className="flex flex-col sm:flex-row gap-2 items-center">
    <label className="text-sm">
      From:
      <input
        type="date"
        className="ml-2 border rounded p-1"
        value={fromDate}
        onChange={(e) => onFromDateChange(e.target.value)}
      />
    </label>
    <label className="text-sm">
      To:
      <input
        type="date"
        className="ml-2 border rounded p-1"
        value={toDate}
        onChange={(e) => onToDateChange(e.target.value)}
      />
    </label>
  </div>
);

export default DateFilter;
