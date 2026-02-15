import React from "react";

const BookControl = ({ onAdd, searchValue, setSearchValue }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded-lg shadow mb-4 mx-4">
      <input
        type="text"
        placeholder="Search Book by name..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="w-60 md:w-60 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
      />
      <button
        onClick={onAdd}
        className="px-6 py-2 flex items-center gap-2 bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 text-white font-bold rounded-full shadow-lg hover:scale-105 hover:from-indigo-600 hover:to-cyan-500 transition-all duration-200 border-none focus:outline-none focus:ring-2 focus:ring-blue-400"
        style={{ boxShadow: "0 4px 16px rgba(59,130,246,0.15)" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
        Add Book
      </button>
    </div>
  );
};

export default BookControl;
