export default function NewsletterBanner() {
  return (
    <div className="mt-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="rounded-2xl bg-slate-700 text-white p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6">
          <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-bold">
              Join Our Newsletter And Get...
            </h3>
            <p className="mt-1 text-sm text-white/80">
              $20 discount for your first order
            </p>
          </div>

          <div className="w-full md:w-[520px] flex rounded-xl overflow-hidden bg-white">
            <input
              className="flex-1 px-4 py-3 text-sm text-slate-800 outline-none"
              placeholder="Enter Your Email"
            />
            <button className="px-5 py-3 text-sm font-semibold bg-brand text-white hover:opacity-90 transition">
              Subscribe →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}