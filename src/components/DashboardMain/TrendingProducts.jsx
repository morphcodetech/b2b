import React from "react";
import product1 from "../../assets/prod1.png";
import product2 from "../../assets/prod2.png";
import product3 from "../../assets/prod3.png";
import product4 from "../../assets/prod4.png";

const products = [
  {
    image: product1,
    name: "Fantasy Crunchy C",
    price: "$25.69",
    sales: 152,
  },
  {
    image: product2,
    name: "Peanut Butter Bite",
    price: "$35.36",
    sales: 34,
  },
  {
    image: product3,
    name: "Yumitos Chilli Sprir",
    price: "$78.55",
    sales: 78,
  },
  {
    image: product4,
    name: "Healthy Long Life T",
    price: "$32.98",
    sales: 135,
  },
];

const TrendingProducts = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 flex-1">
      <h3 className="text-lg font-bold text-gray-800 mb-4">
        Trending Products
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left text-sm font-semibold text-gray-700 pb-3 pr-4">
                Images
              </th>
              <th className="text-left text-sm font-semibold text-gray-700 pb-3 pr-4">
                Product Name
              </th>
              <th className="text-left text-sm font-semibold text-gray-700 pb-3 pr-4">
                Price
              </th>
              <th className="text-left text-sm font-semibold text-gray-700 pb-3">
                Sales
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((p, i) => (
              <tr key={i} className="border-b border-gray-100 last:border-0">
                <td className="py-4 pr-4">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-14 h-14 object-cover rounded-lg"
                  />
                </td>
                <td className="py-4 pr-4 text-sm text-gray-500">{p.name}</td>
                <td className="py-4 pr-4 text-sm text-gray-500">{p.price}</td>
                <td className="py-4 text-sm text-gray-500">{p.sales}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TrendingProducts;
