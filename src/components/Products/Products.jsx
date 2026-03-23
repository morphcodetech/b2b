import React from "react";
import productsData from "./Productdata";
import ProductsHeader from "./Productheader";
import ProductTableHeader from "./Producttableheader";
import ProductTableRow from "./Producttablerow";
import ProductPagination from "./Productpagination";

const Products = () => {
  return (
    <div>
      <ProductsHeader />
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <ProductTableHeader />
            <tbody>
              {productsData.map((p) => (
                <ProductTableRow
                  key={p.id}
                  image={p.image}
                  name={p.name}
                  price={p.price}
                  stock={p.stock}
                  sales={p.sales}
                />
              ))}
            </tbody>
          </table>
        </div>
        <ProductPagination totalPages={3} />
      </div>
    </div>
  );
};

export default Products;
