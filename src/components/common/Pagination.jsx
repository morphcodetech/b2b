export default function Pagination() {
  return (
    <div className="mt-10 flex items-center justify-center gap-2 text-sm">
      <button className="h-9 w-9 rounded-lg border bg-white hover:bg-slate-50">
        «
      </button>

      <button className="h-9 w-9 rounded-lg bg-emerald-600 text-white font-semibold">
        1
      </button>

      <button className="h-9 w-9 rounded-lg border bg-white hover:bg-slate-50">
        2
      </button>
      <button className="h-9 w-9 rounded-lg border bg-white hover:bg-slate-50">
        3
      </button>

      <button className="h-9 w-9 rounded-lg border bg-white hover:bg-slate-50">
        »
      </button>
    </div>
  );
}