import React from "react";

const OrderTableHeader = () => {
  return (
    <thead>
      <tr className="border-b-2 border-gray-800">
        <th className="text-left text-sm font-semibold text-gray-700 pb-3 pr-4">
          Order ID
        </th>
        <th className="text-left text-sm font-semibold text-gray-700 pb-3 pr-4">
          Product Name
        </th>
        <th className="text-left text-sm font-semibold text-gray-700 pb-3">
          Status
        </th>
      </tr>
    </thead>
  );
};

export default OrderTableHeader;
