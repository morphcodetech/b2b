import React from "react";

const OrderStatusBadge = ({ status }) => {
  const isShipped = status === "Shipped";
  const isCompleted = status === "Completed";
  const isPending = status === "Pending";
  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-medium ${
        isShipped
          ? "bg-[#FA6C48]/15 text-[#FA6C48]"
          : isCompleted
          ? "bg-emerald-50 text-emerald-500"
          : isPending
          ? "bg-red-50 text-red-400"
          : "bg-gray-100 text-gray-600"
      }`}
    >
      {status}
    </span>
  );
};

export default OrderStatusBadge;
