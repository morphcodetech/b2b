import {
  FiMapPin,
  FiSearch,
  FiPhone,
  FiHeart,
  FiShoppingCart,
  FiUser,
  FiZap,
} from "react-icons/fi";

export default function BodyTopHeader() {
  return (
    <div className="bg-white">
      {/* Top strip */}
      <div className="bg-[#FA6C48] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-3 py-2 text-[11px] font-medium sm:justify-between sm:px-4 sm:text-sm">
          <div className="hidden items-center gap-2 sm:flex">
            <FiMapPin />
            <span>1418 Riverwood Drive, CA 96052, US</span>
          </div>

          <div className="text-center">
            Something you love is now on sale!{" "}
            <span className="underline">Buy Now!</span>
          </div>

          <div className="hidden items-center gap-3 sm:flex">
            <span>English</span>
            <span className="opacity-50">|</span>
            <span>USD</span>
          </div>
        </div>
      </div>

      {/* Main header row */}
      <div className="border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:py-6">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            {/* Logo */}
            <div className="flex justify-center xl:justify-start">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
                Fast<span className="text-[#FA6C48]">kart</span>
                <span className="text-[#FA6C48]">.</span>
              </h2>
            </div>

            {/* Search block */}
            <div className="w-full min-w-0 xl:max-w-3xl">
              <div className="flex flex-col gap-3 lg:flex-row">
                <div className="flex w-full items-center gap-2 rounded-xl border border-slate-200 px-3 py-3 lg:max-w-[220px]">
                  <FiMapPin className="shrink-0 text-[#FA6C48]" />
                  <select className="w-full min-w-0 bg-transparent text-sm text-slate-700 outline-none">
                    <option>Your Location</option>
                    <option>Kathmandu</option>
                    <option>Lalitpur</option>
                    <option>Bhaktapur</option>
                  </select>
                </div>

                <div className="flex w-full min-w-0 overflow-hidden rounded-xl border border-slate-200">
                  <div className="flex items-center px-4 text-[#FA6C48]">
                    <FiSearch />
                  </div>

                  <input
                    type="text"
                    placeholder="I'm searching for..."
                    className="w-full min-w-0 px-2 py-3 text-sm outline-none"
                  />

                  <button className="shrink-0 bg-[#FA6C48] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#e85f3d] sm:px-6">
                    Search
                  </button>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:justify-between xl:justify-end">
              <div className="hidden items-center gap-3 lg:flex">
                <FiPhone className="text-2xl text-slate-700" />
                <div>
                  <p className="text-xs text-slate-500">24/7 Delivery</p>
                  <p className="font-semibold text-slate-900">
                    +91 888 104 2340
                  </p>
                </div>
              </div>

              <div className="hidden h-8 w-px bg-slate-200 lg:block" />

              <button className="text-slate-700 transition hover:text-[#FA6C48]">
                <FiHeart size={22} />
              </button>

              <button className="relative text-slate-700 transition hover:text-[#FA6C48]">
                <FiShoppingCart size={22} />
                <span className="absolute -right-2 -top-2 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-[#FA6C48] px-1 text-[10px] font-bold text-white">
                  2
                </span>
              </button>

              <div className="flex items-center gap-2">
                <FiUser className="text-slate-700" size={20} />
                <div className="hidden sm:block">
                  <p className="text-xs text-slate-500">Hello,</p>
                  <p className="font-semibold text-slate-900">My Account</p>
                </div>
              </div>

              <button className="inline-flex items-center gap-2 rounded-xl bg-[#FA6C48] px-5 py-3 font-semibold text-white transition hover:bg-[#e85f3d]">
                <FiZap />
                Deal Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}