import React from "react";

const ProductTableRow = ({ image, name, price, stock, sales }) => (
  <tr className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
    <td className="py-4 pr-4">
      <img
        src={image}
        alt={name}
        className="w-14 h-14 object-cover rounded-lg"
      />
    </td>
    <td className="py-4 pr-4 text-sm text-gray-600">{name}</td>
    <td className="py-4 pr-4 text-sm font-semibold text-[#FA6C48]">{price}</td>
    <td className="py-4 pr-4 text-sm text-gray-600">{stock}</td>
    <td className="py-4 pr-4 text-sm text-gray-600">{sales}</td>
    <td className="py-4">
      <div className="flex items-center gap-3">
        {/* Edit */}
        <button className="text-[#FA6C48] hover:text-[#FA6C48]/90 transition-colors">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
            <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
          </svg>
        </button>
        {/* Delete */}
        <button className="text-red-400 hover:text-red-600 transition-colors">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <polyline points="3 6 5 6 21 6" />
            <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" />
            <path d="M10 11v6M14 11v6" />
            <path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2" />
          </svg>
        </button>
      </div>
    </td>
  </tr>
);

export default ProductTableRow;
