import React from "react";

const OrderTableHeader = () => (
  <thead>
    <tr className="border-b-2 border-gray-800">
      <th className="text-left text-sm font-semibold text-gray-700 pb-3 pr-4">
        Order ID
      </th>
      <th className="text-center text-sm font-semibold text-gray-700 pb-3 pr-4">
        Product Name
      </th>
      <th className="text-center text-sm font-semibold text-gray-700 pb-3 pr-4">
        Status
      </th>
      <th className="text-right text-sm font-semibold text-gray-700 pb-3">
        Price
      </th>
    </tr>
  </thead>
);

export default OrderTableHeader;
