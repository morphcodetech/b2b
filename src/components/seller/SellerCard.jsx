import { FiMapPin, FiPhone, FiArrowRight } from "react-icons/fi";
import StarRating from "../common/StarRating";

export default function SellerCard({ seller }) {
  return (
    <article className="rounded-2xl bg-white p-5 shadow-card transition hover:-translate-y-1 hover:shadow-xl sm:p-6 lg:p-7">
      <div className="flex items-start gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white sm:h-16 sm:w-16">
          <img
            src={seller.logo}
            alt={`${seller.name} logo`}
            className="h-full w-full object-contain p-2"
            loading="lazy"
          />
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-xs font-medium text-slate-500">{seller.since}</p>

          <h3 className="mt-1 text-[18px] font-semibold leading-tight text-slate-900 sm:text-[22px] lg:text-[24px]">
            {seller.name}
          </h3>

          <div className="mt-2">
            <StarRating value={4.5} countText={`(${seller.ratingCount})`} />
          </div>

          <div className="mt-3 inline-flex rounded-md bg-[#FA6C48]/10 px-3 py-1 text-sm font-medium text-[#FA6C48]">
            {seller.products} Products
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-3 text-sm text-slate-600">
        <div className="flex items-start gap-2">
          <FiMapPin className="mt-0.5 shrink-0 text-[#FA6C48]" />
          <p className="leading-7 break-words">
            <span className="font-semibold text-slate-800">Address:</span>{" "}
            {seller.address}
          </p>
        </div>

        <div className="flex items-start gap-2">
          <FiPhone className="mt-0.5 shrink-0 text-[#FA6C48]" />
          <p className="leading-7 break-words">
            <span className="font-semibold text-slate-800">Contact Us:</span>{" "}
            {seller.phone}
          </p>
        </div>
      </div>

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="button"
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#FA6C48] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#e85f3d] sm:w-auto"
        >
          Visit Store <FiArrowRight />
        </button>

        <div className="flex items-center justify-between sm:justify-end">
          <div className="flex -space-x-2">
            {seller.thumbs?.map((item, i) => (
              <div
                key={i}
                className="h-9 w-9 overflow-hidden rounded-full border-2 border-white bg-white shadow-sm sm:h-10 sm:w-10"
                title="product"
              >
                <img
                  src={item}
                  alt={`product-${i + 1}`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <div className="ml-3 flex h-10 min-w-[50px] items-center justify-center rounded-full border border-slate-200 bg-white px-3 text-sm font-medium text-slate-700 shadow-sm">
            +63
          </div>
        </div>
      </div>
    </article>
  );
}