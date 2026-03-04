import { FiMapPin, FiPhone, FiArrowRight } from "react-icons/fi";

function Stars({ count = 5 }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-amber-400 text-sm">★</span>
      ))}
    </div>
  );
}

export default function SellerCard({ seller }) {
  return (
    <div className="relative rounded-2xl bg-white shadow-card p-6">
      <div className="flex items-start gap-4">
        {/* Logo placeholder */}
        <div className="h-14 w-14 rounded-2xl bg-slate-50 border flex items-center justify-center text-slate-700 font-bold">
          {seller.logoText}
        </div>

        <div className="flex-1">
          <p className="text-xs text-slate-500">{seller.since}</p>
          <h3 className="text-lg font-semibold text-slate-900 leading-snug">
            {seller.name}
          </h3>

          <div className="mt-1 flex items-center gap-2">
            <Stars />
            <span className="text-sm text-teal-600 font-medium">
              ({seller.ratingCount})
            </span>
          </div>

          <div className="mt-2 inline-flex rounded-md bg-emerald-50 px-3 py-1 text-sm text-emerald-700">
            {seller.products} Products
          </div>
        </div>
      </div>

      <div className="mt-5 space-y-2 text-sm text-slate-600">
        <div className="flex items-start gap-2">
          <FiMapPin className="mt-0.5 text-emerald-600" />
          <p>
            <span className="font-medium text-slate-700">Address:</span>{" "}
            {seller.address}
          </p>
        </div>

        <div className="flex items-start gap-2">
          <FiPhone className="mt-0.5 text-emerald-600" />
          <p>
            <span className="font-medium text-slate-700">Contact Us:</span>{" "}
            {seller.phone}
          </p>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between gap-3">
        <button
          className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-white text-sm font-semibold
                     hover:opacity-90 transition"
        >
          Visit Store <FiArrowRight />
        </button>

        {/* Small bubble thumbnails (fake) */}
        <div className="flex items-center">
          <div className="-space-x-2 flex">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="h-8 w-8 rounded-full bg-slate-100 border"
                title="product"
              />
            ))}
          </div>
          <div className="ml-2 h-8 px-3 rounded-full bg-white border shadow-sm flex items-center text-sm text-slate-700">
            +63
          </div>
        </div>
      </div>
    </div>
  );
}