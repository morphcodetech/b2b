import React, { useEffect, useState } from "react";
import orderSeed from "./orderData";
import OrderHeader from "./OrderHeader";
import OrderTableHeader from "./OrderTableHeader";
import OrderTableRow from "./OrderTableRow";
import OrderPagination from "./OrderPagination";

const Order = () => {
  const STORAGE_KEY = "b2b.orders.demo.v1";

  const normalizeSeed = (arr) => (arr || []).map((o) => ({ ...o }));

  const [orders, setOrders] = useState(() => {
    if (typeof window === "undefined") return normalizeSeed(orderSeed);

    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return normalizeSeed(orderSeed);
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) return normalizeSeed(orderSeed);
      return parsed;
    } catch {
      return normalizeSeed(orderSeed);
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(orders));
    } catch {
      // Ignore localStorage errors
    }
  }, [orders]);

  const handleUpdateStatus = (id, status) => {
    setOrders((prev) => prev.map((o) => (o.id === id ? { ...o, status } : o)));
  };

  return (
    <div>
      <OrderHeader />
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <OrderTableHeader />
            <tbody>
              {orders.map((o) => (
                <OrderTableRow
                  key={o.id}
                  id={o.id}
                  product={o.product}
                  status={o.status}
                  price={o.price}
                  onUpdateStatus={handleUpdateStatus}
                />
              ))}
            </tbody>
          </table>
        </div>
        <OrderPagination totalPages={3} />
      </div>
    </div>
  );
};

export default Order;
