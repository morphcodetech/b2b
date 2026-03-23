import React from "react";
import OrderStatusBadge from "./OrderStatusBadge";

const OrderTableRow = ({
  id,
  product,
  status,
  price,
  onUpdateStatus,
}) => (
  <tr className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
    <td className="py-4 pr-4 text-sm font-bold text-gray-800">{id}</td>
    <td className="py-4 pr-4 text-sm text-gray-600 text-center">
      {product}
    </td>
    <td className="py-4 pr-4 text-center">
      <div className="flex items-center justify-center gap-3">
        {onUpdateStatus ? (
          <>
            <OrderStatusBadge status={status} />
            <select
              value={status}
              onChange={(e) => onUpdateStatus(id, e.target.value)}
              className="px-3 py-1.5 rounded-lg border border-gray-200 bg-white text-sm text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FA6C48]/30 focus:border-[#FA6C48]/50"
              aria-label={`Update status for order ${id}`}
            >
              <option value="Pending">Pending</option>
              <option value="Shipped">Shipped</option>
              <option value="Completed">Completed</option>
            </select>
          </>
        ) : (
          <OrderStatusBadge status={status} />
        )}
      </div>
    </td>
    <td className="py-4 text-sm text-gray-700 text-right">{price}</td>
  </tr>
);

export default OrderTableRow;
