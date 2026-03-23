import React, { useState } from "react";

const ProductPagination = ({ totalPages = 3 }) => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="flex items-center justify-center gap-2 mt-6">
      {/* Prev */}
      <button
        onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
        disabled={currentPage === 1}
        className="w-8 h-8 flex items-center justify-center rounded text-gray-500 hover:text-[#FA6C48] disabled:opacity-30 transition-colors"
      >
        «
      </button>

      {/* Pages */}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`w-8 h-8 flex items-center justify-center rounded text-sm font-medium transition-colors ${
            currentPage === page
              ? "bg-[#FA6C48] text-white"
              : "text-gray-600 hover:text-[#FA6C48]"
          }`}
        >
          {page}
        </button>
      ))}

      {/* Next */}
      <button
        onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
        disabled={currentPage === totalPages}
        className="w-8 h-8 flex items-center justify-center rounded text-gray-500 hover:text-[#FA6C48] disabled:opacity-30 transition-colors"
      >
        »
      </button>
    </div>
  );
};

export default ProductPagination;
