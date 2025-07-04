import React from "react";

const Editor = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-indigo-700 mb-4">✏️ Online Editor</h2>
      <textarea
        className="w-full border p-2 rounded"
        rows="10"
        placeholder="Start typing here..."
      ></textarea>
    </div>
  );
};

export default Editor;
