import { NavLink } from "react-router-dom";

const linkBase =
  "px-3 py-2 rounded-lg text-sm font-medium transition";
const active =
  "bg-brand text-white shadow";
const inactive =
  "text-slate-600 hover:bg-slate-100 hover:text-slate-900";

export default function MiniNav() {
  return (
    <div className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center gap-2">
        <span className="text-sm font-semibold text-slate-800">Fastkart UI</span>

        <div className="ml-auto flex flex-wrap gap-2">
          <NavLink
            to="/seller-grid-2"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? active : inactive}`
            }
          >
            Seller Grid 2
          </NavLink>

          {/* Add more links later if your team adds pages */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? active : inactive}`
            }
          >
            Home
          </NavLink>
        </div>
      </div>
    </div>
  );
}