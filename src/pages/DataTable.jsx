import React from "react";

const DataTable = () => {
  const data = [
    { id: 1, name: "John Doe", email: "john@example.com", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", status: "Inactive" },
    { id: 3, name: "Sam Green", email: "sam@example.com", status: "Active" },
  ];

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-indigo-700 mb-4">📋 Data Table</h2>
      <div className="overflow-x-auto rounded shadow border border-indigo-200">
        <table className="w-full text-left">
          <thead className="bg-indigo-700 text-white">
            <tr>
              <th className="py-3 px-4">ID</th>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Email</th>
              <th className="py-3 px-4">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white text-gray-800">
            {data.map((item) => (
              <tr key={item.id} className="hover:bg-indigo-50">
                <td className="py-2 px-4">{item.id}</td>
                <td className="py-2 px-4">{item.name}</td>
                <td className="py-2 px-4">{item.email}</td>
                <td className="py-2 px-4">{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
