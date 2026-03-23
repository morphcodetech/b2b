import React, { useEffect, useState } from "react";
import productsSeed from "./Productdata";
import ProductsHeader from "./Productheader";
import ProductTableHeader from "./Producttableheader";
import ProductTableRow from "./Producttablerow";
import ProductPagination from "./Productpagination";

const Products = () => {
  const STORAGE_KEY = "b2b.products.demo.v1";

  const normalizeSeed = (arr) =>
    (arr || []).map((p) => ({
      ...p,
    }));

  const [products, setProducts] = useState(() => {
    // Keep demo edits across refreshes (best-effort).
    if (typeof window === "undefined") return normalizeSeed(productsSeed);

    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return normalizeSeed(productsSeed);
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) return normalizeSeed(productsSeed);
      return parsed;
    } catch {
      return normalizeSeed(productsSeed);
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
    } catch {
      // Ignore localStorage errors (private mode, quota, etc.)
    }
  }, [products]);

  const handleDelete = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const handleUpdate = (id, updates) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...updates } : p))
    );
  };

  return (
    <div>
      <ProductsHeader />
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <ProductTableHeader />
            <tbody>
              {products.map((p) => (
                <ProductTableRow
                  key={p.id}
                  id={p.id}
                  image={p.image}
                  name={p.name}
                  price={p.price}
                  stock={p.stock}
                  sales={p.sales}
                  onUpdate={handleUpdate}
                  onDelete={handleDelete}
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
