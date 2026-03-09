import { FiHome } from "react-icons/fi";

export default function BreadcrumbHeader({ title }) {
  return (
    <div className="border-b border-slate-200/70 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:py-10 lg:py-12">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-[34px] font-semibold leading-tight text-slate-900 sm:text-[40px] lg:text-[42px]">
            {title}
          </h1>

          <div className="flex items-center gap-2 text-sm text-slate-500">
            <FiHome className="text-slate-500" />
            <span className="text-slate-400">›</span>
            <span className="font-medium text-slate-700">{title}</span>
          </div>
        </div>
      </div>
    </div>
  );
}