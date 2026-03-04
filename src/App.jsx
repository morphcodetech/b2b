import { BrowserRouter } from "react-router-dom";
import MiniNav from "./components/common/MiniNav";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <BrowserRouter>
      <MiniNav />
      <AppRoutes />
    </BrowserRouter>
  );
}