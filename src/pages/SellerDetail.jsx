import { useState } from "react";
import VendorHero from "../components/seller/VendorHero";
import SellerSidebar from "../components/seller/SellerSidebar";
import SortBar from "../components/product/SortBar";
import ProductGrid from "../components/product/ProductGrid";
import ProductList from "../components/product/ProductList";

export default function SellerDetail() {
  const [view, setView] = useState("grid");

  return (
    <div>
      <VendorHero />

      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-4 gap-10">
        <div className="lg:col-span-1">
          <SellerSidebar />
        </div>

        <div className="lg:col-span-3">
          <SortBar view={view} setView={setView} />

          {view === "grid" ? <ProductGrid /> : <ProductList />}
        </div>
      </div>
    </div>
  );
}