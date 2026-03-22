import {
  FiHeart,
  FiMapPin,
  FiPhone,
  FiSearch,
  FiShoppingCart,
  FiUser,
  FiZap,
} from "react-icons/fi";
import { topBarContent } from "../../data/uiContent";

export default function BodyTopHeader() {
  return (
    <header className="bg-white">
      <div className="bg-[#FA6C48] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-3 py-2 text-[11px] font-medium sm:justify-between sm:px-4 sm:text-sm">
          <div className="hidden items-center gap-2 sm:flex">
            <FiMapPin />
            <span>{topBarContent.location}</span>
          </div>

          <div className="text-center">
            {topBarContent.saleText}{" "}
            <button
              type="button"
              className="underline underline-offset-2"
              aria-label={topBarContent.saleLink}
            >
              {topBarContent.saleLink}
            </button>
          </div>

          <div className="hidden items-center gap-3 sm:flex">
            <span>{topBarContent.language}</span>
            <span className="opacity-50">|</span>
            <span>{topBarContent.currency}</span>
          </div>
        </div>
      </div>

      <div className="border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:py-6">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <div className="flex justify-center xl:justify-start">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
                Fast<span className="text-[#FA6C48]">kart</span>
                <span className="text-[#FA6C48]">.</span>
              </h2>
            </div>

            <div className="w-full min-w-0 xl:max-w-3xl">
              <div className="flex flex-col gap-3 lg:flex-row">
                <div className="flex w-full items-center gap-2 rounded-xl border border-slate-200 px-3 py-3 lg:max-w-[220px]">
                  <FiMapPin className="shrink-0 text-[#FA6C48]" />
                  <select
                    aria-label="Choose location"
                    className="w-full min-w-0 bg-transparent text-sm text-slate-700 outline-none"
                    defaultValue="Your Location"
                  >
                    <option>Your Location</option>
                    <option>Kathmandu</option>
                    <option>Lalitpur</option>
                    <option>Bhaktapur</option>
                  </select>
                </div>

                <div className="flex w-full min-w-0 overflow-hidden rounded-xl border border-slate-200 bg-white">
                  <div className="flex items-center px-4 text-[#FA6C48]">
                    <FiSearch />
                  </div>

                  <input
                    type="text"
                    aria-label="Search products"
                    placeholder="I'm searching for..."
                    className="w-full min-w-0 px-2 py-3 text-sm outline-none"
                  />

                  <button
                    type="button"
                    aria-label="Search"
                    className="shrink-0 bg-[#FA6C48] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#e85f3d] sm:px-6"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:justify-between xl:justify-end">
              <div className="hidden items-center gap-3 xl:flex">
                <FiPhone className="text-2xl text-slate-700" />
                <div>
                  <p className="text-xs text-slate-500">
                    {topBarContent.phoneLabel}
                  </p>
                  <p className="font-semibold text-slate-900">
                    {topBarContent.phoneNumber}
                  </p>
                </div>
              </div>

              <div className="hidden h-8 w-px bg-slate-200 xl:block" />

              <button
                type="button"
                aria-label="Wishlist"
                className="text-slate-700 transition hover:text-[#FA6C48]"
              >
                <FiHeart size={22} />
              </button>

              <button
                type="button"
                aria-label="Shopping cart"
                className="relative text-slate-700 transition hover:text-[#FA6C48]"
              >
                <FiShoppingCart size={22} />
                <span className="absolute -right-2 -top-2 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-[#FA6C48] px-1 text-[10px] font-bold text-white">
                  2
                </span>
              </button>

              <button
                type="button"
                aria-label="My account"
                className="flex items-center gap-2 text-left"
              >
                <FiUser className="text-slate-700" size={20} />
                <div className="hidden sm:block">
                  <p className="text-xs text-slate-500">
                    {topBarContent.accountGreeting}
                  </p>
                  <p className="font-semibold text-slate-900">
                    {topBarContent.accountLabel}
                  </p>
                </div>
              </button>

              <button
                type="button"
                aria-label={topBarContent.dealText}
                className="inline-flex items-center gap-2 rounded-xl bg-[#FA6C48] px-5 py-3 font-semibold text-white transition hover:bg-[#e85f3d]"
              >
                <FiZap />
                {topBarContent.dealText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}