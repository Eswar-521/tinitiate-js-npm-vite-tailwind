import React from "react";

const About = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4 text-indigo-700">About This Project</h2>
      <p className="text-gray-700 mb-4">
        This is a modern React + Tailwind + Vite template showcasing:
      </p>
      <div className="bg-indigo-50 border border-indigo-200 p-4 rounded shadow">
        <h3 className="text-xl font-semibold mb-2">Key Features</h3>
        <ul className="list-disc pl-6 space-y-1 text-gray-800">
          <li>Reusable component structure</li>
          <li>Advanced routing with react-router-dom</li>
          <li>Responsive Tailwind UI</li>
          <li>Infographics, data tables, and more</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
