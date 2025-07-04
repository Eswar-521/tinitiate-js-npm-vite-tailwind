import React from "react";

const Forms = () => {
  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-3xl font-bold text-indigo-700 mb-4">📝 Forms</h2>
      <form className="space-y-4 bg-indigo-50 border border-indigo-200 p-4 rounded shadow">
        <div>
          <label className="block mb-1 font-semibold">Name</label>
          <input
            type="text"
            className="w-full border rounded p-2"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Email</label>
          <input
            type="email"
            className="w-full border rounded p-2"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Message</label>
          <textarea
            className="w-full border rounded p-2"
            placeholder="Your message"
          />
        </div>
        <button className="bg-indigo-700 text-white px-4 py-2 rounded hover:bg-indigo-800 transition">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Forms;
