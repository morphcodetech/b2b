import React from "react";
import products from "./TrendingData";
import TrendingTableHeader from "./TrendingTableHeader";
import TrendingTableRow from "./TrendingTableRow";

const TrendingProducts = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 flex-1">
      <h3 className="text-lg font-bold text-gray-800 mb-4">
        Trending Products
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          <TrendingTableHeader />
          <tbody>
            {products.map((p, i) => (
              <TrendingTableRow
                key={i}
                image={p.image}
                name={p.name}
                price={p.price}
                sales={p.sales}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TrendingProducts;
