import React from "react";

const orders = [
  { id: "254834", product: "Choco Chip Cookies", status: "Shipped" },
  { id: "355678", product: "Premium Butter Cookies", status: "Pending" },
  { id: "647536", product: "Sprinkled Potato Chips", status: "Shipped" },
  { id: "125689", product: "Milk 1 L", status: "Pending" },
  { id: "215487", product: "Raw Mutton Leg", status: "Pending" },
  { id: "365474", product: "Instant Coffee", status: "Shipped" },
  { id: "368415", product: "Jowar Stick and Jowar Chips", status: "Pending" },
];

const StatusBadge = ({ status }) => {
  const isShipped = status === "Shipped";
  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-medium ${
        isShipped ? "bg-[#e6f7f4] text-[#0fa488]" : "bg-red-50 text-red-400"
      }`}
    >
      {status}
    </span>
  );
};

const RecentOrders = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 flex-1">
      <h3 className="text-lg font-bold text-gray-800 mb-4">Recent Order</h3>
      <div className="overflow-x-auto">
        <table className="w-full">
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
          <tbody>
            {orders.map((o, i) => (
              <tr key={i} className="border-b border-gray-100 last:border-0">
                <td className="py-3 pr-4 text-sm font-bold text-gray-800">
                  {o.id}
                </td>
                <td className="py-3 pr-4 text-sm text-gray-500">
                  {o.product}
                </td>
                <td className="py-3">
                  <StatusBadge status={o.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;
