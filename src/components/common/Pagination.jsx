export default function Pagination() {
  return (
    <div className="mt-10 flex items-center justify-center gap-3 text-sm">
      <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white font-medium text-slate-700 transition hover:border-[#FA6C48] hover:text-[#FA6C48]">
        «
      </button>

      <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FA6C48] font-bold text-white shadow-md transition hover:bg-[#e85f3d]">
        1
      </button>

      <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white font-medium text-slate-700 transition hover:border-[#FA6C48] hover:text-[#FA6C48]">
        2
      </button>

      <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white font-medium text-slate-700 transition hover:border-[#FA6C48] hover:text-[#FA6C48]">
        3
      </button>

      <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white font-medium text-slate-700 transition hover:border-[#FA6C48] hover:text-[#FA6C48]">
        »
      </button>
    </div>
  );
}