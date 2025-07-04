import React from "react";

const Dashboard = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-indigo-700 mb-4">📊 Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-indigo-100 p-4 rounded shadow">Card 1</div>
        <div className="bg-indigo-100 p-4 rounded shadow">Card 2</div>
        <div className="bg-indigo-100 p-4 rounded shadow">Card 3</div>
      </div>
    </div>
  );
};

export default Dashboard;
