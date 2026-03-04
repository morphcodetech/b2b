import { FiHome } from "react-icons/fi";

export default function BreadcrumbHeader({ title }) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-2xl font-semibold text-slate-900">{title}</h1>

          <div className="flex items-center gap-2 text-sm text-slate-500">
            <FiHome className="text-slate-500" />
            <span className="text-slate-400">›</span>
            <span className="text-slate-700 font-medium">{title}</span>
          </div>
        </div>
      </div>
    </div>
  );
}