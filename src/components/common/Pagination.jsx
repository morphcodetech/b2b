export default function Pagination() {
  return (
    <nav
      aria-label="Pagination"
      className="mt-10 flex items-center justify-center gap-3 text-sm"
    >
      <button
        aria-label="Previous page"
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white font-medium text-slate-700 transition hover:border-[#FA6C48] hover:text-[#FA6C48]"
      >
        «
      </button>

      <button
        aria-label="Page 1"
        aria-current="page"
        className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FA6C48] font-bold text-white shadow-md transition hover:bg-[#e85f3d]"
      >
        1
      </button>

      <button
        aria-label="Page 2"
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white font-medium text-slate-700 transition hover:border-[#FA6C48] hover:text-[#FA6C48]"
      >
        2
      </button>

      <button
        aria-label="Page 3"
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white font-medium text-slate-700 transition hover:border-[#FA6C48] hover:text-[#FA6C48]"
      >
        3
      </button>

      <button
        aria-label="Next page"
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white font-medium text-slate-700 transition hover:border-[#FA6C48] hover:text-[#FA6C48]"
      >
        »
      </button>
    </nav>
  );
}