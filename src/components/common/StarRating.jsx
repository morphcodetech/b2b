import { FiStar } from "react-icons/fi";

export default function StarRating({ value = 4.5, countText = "(26)" }) {
  const full = Math.floor(value);
  const half = value - full >= 0.5;

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => {
          const active = i < full || (i === full && half);

          return (
            <FiStar
              key={i}
              size={14}
              className={active ? "text-[#FA6C48]" : "text-slate-200"}
              fill={active ? "currentColor" : "none"}
            />
          );
        })}
      </div>

      <span className="text-sm font-medium text-[#FA6C48]">{countText}</span>
    </div>
  );
}