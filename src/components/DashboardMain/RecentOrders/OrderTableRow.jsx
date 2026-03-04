import React from "react";
import StatusBadge from "./StatusBadge";

const OrderTableRow = ({ id, product, status }) => {
  return (
    <tr className="border-b border-gray-100 last:border-0">
      <td className="py-3 pr-4 text-sm font-bold text-gray-800">{id}</td>
      <td className="py-3 pr-4 text-sm text-gray-500">{product}</td>
      <td className="py-3">
        <StatusBadge status={status} />
      </td>
    </tr>
  );
};

export default OrderTableRow;
