import { Routes, Route } from "react-router-dom";
import SellerGridTwoPage from "../pages/seller/SellerGridTwoPage";

function Home() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold">Home</h1>
      <p className="text-slate-600 mt-2">
        Use the top mini navigation to open Seller Grid 2.
      </p>
    </div>
  );
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/seller-grid-2" element={<SellerGridTwoPage />} />
    </Routes>
  );
}