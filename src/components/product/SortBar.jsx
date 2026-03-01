import { useState } from "react";
import { FaChevronDown, FaThLarge, FaList } from "react-icons/fa";

const sortOptions = [
  "Popularity",
  "Low - High Price",
  "High - Low Price",
  "Average Rating",
  "A - Z Order",
  "Z - A Order",
  "% Off - High To Low",
];

const SortBar = ({ viewMode, setViewMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Most Popular");

  return (
    <div className="flex justify-between items-center mb-8">

      {/* LEFT SIDE - Sort */}
      <div className="relative">
        <span className="mr-2 text-gray-600">Sort By :</span>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gray-100 px-4 py-2 rounded-md flex items-center gap-2 hover:bg-gray-200 transition"
        >
          {selected}
          <FaChevronDown className="text-sm" />
        </button>

        {/* Dropdown */}
        {isOpen && (
          <div className="absolute mt-2 w-56 bg-white shadow-lg rounded-md border border-gray-200 z-50">
            {sortOptions.map((option) => (
              <div
                key={option}
                onClick={() => {
                  setSelected(option);
                  setIsOpen(false);
                }}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* RIGHT SIDE - View Toggle */}
      <div className="flex gap-3">
        <button
          onClick={() => setViewMode("grid")}
          className={`p-3 rounded-md ${
            viewMode === "grid"
              ? "bg-primary text-white"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          <FaThLarge />
        </button>

        <button
          onClick={() => setViewMode("list")}
          className={`p-3 rounded-md ${
            viewMode === "list"
              ? "bg-primary text-white"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          <FaList />
        </button>
      </div>
    </div>
  );
};

export default SortBar;