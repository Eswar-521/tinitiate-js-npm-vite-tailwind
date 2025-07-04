import React from "react";

const ComparisonTable = () => {
  const plans = [
    {
      name: "Basic",
      price: "$9/mo",
      features: ["1 User", "5GB Storage", "Email Support"]
    },
    {
      name: "Pro",
      price: "$29/mo",
      features: ["5 Users", "50GB Storage", "Priority Support"]
    },
    {
      name: "Enterprise",
      price: "$99/mo",
      features: ["Unlimited Users", "1TB Storage", "24/7 Support"]
    }
  ];

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-indigo-700 mb-4">📑 Comparison Table</h2>
      <div className="overflow-x-auto rounded shadow">
        <table className="w-full text-left border-collapse">
          <thead className="bg-indigo-700 text-white">
            <tr>
              <th className="py-3 px-4">Plan</th>
              <th className="py-3 px-4">Price</th>
              <th className="py-3 px-4">Features</th>
            </tr>
          </thead>
          <tbody className="bg-white text-gray-800">
            {plans.map((plan, idx) => (
              <tr key={idx} className="hover:bg-indigo-50">
                <td className="py-3 px-4 font-semibold">{plan.name}</td>
                <td className="py-3 px-4">{plan.price}</td>
                <td className="py-3 px-4">
                  <ul className="list-disc ml-4">
                    {plan.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComparisonTable;
