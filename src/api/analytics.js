export const fetchAdmissionAnalytics = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        totalApplicants: 1200,
        verifiedApplicants: 850,
        rejectedApplicants: 200,
        applicationsPerProgram: [
          { program: "BTech", applicants: 500 },
          { program: "MBA", applicants: 300 },
          { program: "MTech", applicants: 250 },
          { program: "PhD", applicants: 150 },
        ],
        applicationTrends: [
          { date: "2025-05-01", applicants: 50 },
          { date: "2025-05-02", applicants: 80 },
          { date: "2025-05-03", applicants: 90 },
          { date: "2025-05-04", applicants: 120 },
          { date: "2025-05-05", applicants: 60 },
        ],
      });
    }, 1000);
  });
};
