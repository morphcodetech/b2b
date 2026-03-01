import { Routes, Route } from "react-router-dom";
import SimpleLayout from "./layouts/SimpleLayout";
import SellerDetail from "./pages/SellerDetail";

function App() {
  return (
    <Routes>
      <Route element={<SimpleLayout />}>
        <Route path="/" element={<SellerDetail />} />
      </Route>
    </Routes>
  );
}

export default App;