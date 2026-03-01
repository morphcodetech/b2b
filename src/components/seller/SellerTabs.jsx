import { useState } from "react";

const SellerTabs = ({ products, reviews }) => {
  const [active, setActive] = useState("products");

  return (
    <div className="mt-10">
      <div className="flex gap-8 border-b">
        <button
          onClick={() => setActive("products")}
          className={`pb-3 font-medium ${
            active === "products"
              ? "text-primary border-b-2 border-primary"
              : "text-gray-500"
          }`}
        >
          Products
        </button>

        <button
          onClick={() => setActive("reviews")}
          className={`pb-3 font-medium ${
            active === "reviews"
              ? "text-primary border-b-2 border-primary"
              : "text-gray-500"
          }`}
        >
          Reviews
        </button>
      </div>

      <div className="mt-6">
        {active === "products" ? products : reviews}
      </div>
    </div>
  );
};

export default SellerTabs;