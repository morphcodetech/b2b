import { FiMapPin, FiSearch, FiZap } from "react-icons/fi";

export default function TopSearchBar() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-5">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          {/* Left: Location + Search */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:flex-1">
            {/* Location Select */}
            <div className="w-full sm:w-52">
              <label className="sr-only">Location</label>
              <div className="flex items-center gap-2 rounded-xl border bg-white px-3 py-3">
                <FiMapPin className="text-slate-500" />
                <select className="w-full bg-transparent text-sm text-slate-700 outline-none">
                  <option>Your Location</option>
                  <option>Kathmandu</option>
                  <option>Lalitpur</option>
                  <option>Bhaktapur</option>
                </select>
              </div>
            </div>

            {/* Search input */}
            <div className="flex w-full overflow-hidden rounded-xl border bg-white">
              <div className="flex items-center px-3 text-slate-500">
                <FiSearch />
              </div>
              <input
                placeholder="I'm searching for..."
                className="w-full px-2 py-3 text-sm outline-none"
              />
              <button
                className="px-5 text-white font-semibold text-sm bg-brand hover:opacity-90 transition"
                type="button"
              >
                Search
              </button>
            </div>
          </div>

          {/* Right: Deal Today */}
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3
                       bg-brand text-white text-sm font-semibold hover:opacity-90 transition
                       lg:ml-6"
          >
            <FiZap />
            Deal Today
          </button>
        </div>
      </div>
    </div>
  );
}