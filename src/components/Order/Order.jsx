import React from "react";
import orderData from "./orderData";
import OrderHeader from "./OrderHeader";
import OrderTableHeader from "./OrderTableHeader";
import OrderTableRow from "./OrderTableRow";
import OrderPagination from "./OrderPagination";

const Order = () => {
  return (
    <div>
      <OrderHeader />
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <OrderTableHeader />
            <tbody>
              {orderData.map((o, i) => (
                <OrderTableRow
                  key={i}
                  id={o.id}
                  product={o.product}
                  status={o.status}
                  price={o.price}
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
