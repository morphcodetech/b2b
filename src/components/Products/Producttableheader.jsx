import React from "react";

const ProductTableHeader = () => (
  <thead>
    <tr className="border-b border-gray-200">
      <th className="text-left text-sm font-semibold text-gray-700 pb-3 pr-4">
        Images
      </th>
      <th className="text-left text-sm font-semibold text-gray-700 pb-3 pr-4">
        Product Name
      </th>
      <th className="text-left text-sm font-semibold text-gray-700 pb-3 pr-4">
        Price
      </th>
      <th className="text-left text-sm font-semibold text-gray-700 pb-3 pr-4">
        Stock
      </th>
      <th className="text-left text-sm font-semibold text-gray-700 pb-3 pr-4">
        Sales
      </th>
      <th className="text-left text-sm font-semibold text-gray-700 pb-3">
        Edit / Delete
      </th>
    </tr>
  </thead>
);

export default ProductTableHeader;
