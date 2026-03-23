import React from "react";
import OrderStatusBadge from "./OrderStatusBadge";

const OrderTableRow = ({ id, product, status, price }) => (
  <tr className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
    <td className="py-4 pr-4 text-sm font-bold text-gray-800">{id}</td>
    <td className="py-4 pr-4 text-sm text-gray-600 text-center">{product}</td>
    <td className="py-4 pr-4 text-center">
      <OrderStatusBadge status={status} />
    </td>
    <td className="py-4 text-sm text-gray-700 text-right">{price}</td>
  </tr>
);

export default OrderTableRow;
