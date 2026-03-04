import React from "react";

const TrendingTableRow = ({ image, name, price, sales }) => {
  return (
    <tr className="border-b border-gray-100 last:border-0">
      <td className="py-4 pr-4">
        <img
          src={image}
          alt={name}
          className="w-14 h-14 object-cover rounded-lg"
        />
      </td>
      <td className="py-4 pr-4 text-sm text-gray-500">{name}</td>
      <td className="py-4 pr-4 text-sm text-gray-500">{price}</td>
      <td className="py-4 text-sm text-gray-500">{sales}</td>
    </tr>
  );
};

export default TrendingTableRow;
