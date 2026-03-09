import { Routes, Route, Navigate } from "react-router-dom";
import SellerGridTwoPage from "../pages/seller/SellerGridTwoPage";

export default function AppRoutes() {
  return (
    <Routes>
      {/* redirect / to seller grid */}
      <Route path="/" element={<Navigate to="/seller-grid-2" replace />} />
      <Route path="/seller-grid-2" element={<SellerGridTwoPage />} />
      {/* fallback */}
      <Route path="*" element={<Navigate to="/seller-grid-2" replace />} />
    </Routes>
  );
}