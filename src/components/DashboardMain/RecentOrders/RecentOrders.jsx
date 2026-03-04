import React from "react";
import orders from "./OrdersData";
import OrderTableHeader from "./OrderTableHeader";
import OrderTableRow from "./OrderTableRow";

const RecentOrders = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 flex-1">
      <h3 className="text-lg font-bold text-gray-800 mb-4">Recent Order</h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          <OrderTableHeader />
          <tbody>
            {orders.map((o, i) => (
              <OrderTableRow
                key={i}
                id={o.id}
                product={o.product}
                status={o.status}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;
