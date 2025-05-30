import React, { useEffect, useState, useMemo } from "react";
import StatusCard from "./components/StatusCard";
import ApplicationBarChart from "./components/ApplicationBarChart";
import TrendLineChart from "./components/TrendLineChart";
import DateFilter from "./components/DateFilter";
import { fetchAdmissionAnalytics } from "./api/analytics";

const AdmissionDashboard = () => {
  const [data, setData] = useState(null);
  const [fromDate, setFromDate] = useState("2025-05-01");
  const [toDate, setToDate] = useState("2025-05-05");
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    setLoading(true);
    const result = await fetchAdmissionAnalytics();
    setData(result);
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  const filteredTrends = useMemo(() => {
    if (!data) return [];
    return data.applicationTrends.filter((item) => {
      return item.date >= fromDate && item.date <= toDate;
    });
  }, [data, fromDate, toDate]);

  if (loading || !data) {
    return <div className="p-4 text-center text-lg">Loading...</div>;
  }

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Admission Analytics Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <StatusCard title="Total Applicants" count={data.totalApplicants} />
        <StatusCard
          title="Verified Applicants"
          count={data.verifiedApplicants}
        />
        <StatusCard
          title="Rejected Applicants"
          count={data.rejectedApplicants}
        />
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-2">
        <DateFilter
          fromDate={fromDate}
          toDate={toDate}
          onFromDateChange={setFromDate}
          onToDateChange={setToDate}
        />
        <button
          onClick={loadData}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Refresh
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ApplicationBarChart data={data.applicationsPerProgram} />
        <TrendLineChart data={filteredTrends} />
      </div>
    </div>
  );
};

export default AdmissionDashboard;
