import React from "react";

const OrderStatusBadge = ({ status }) => {
  const isShipped = status === "Shipped";
  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-medium ${
        isShipped
          ? "bg-[#FA6C48]/15 text-[#FA6C48]"
          : "bg-red-50 text-red-400"
      }`}
    >
      {status}
    </span>
  );
};

export default OrderStatusBadge;
