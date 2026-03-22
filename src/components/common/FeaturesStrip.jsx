import {
  FiPercent,
  FiShoppingBag,
  FiThumbsUp,
  FiTruck,
} from "react-icons/fi";
import { featureItems } from "../../data/uiContent";

const iconMap = {
  1: <FiShoppingBag size={28} />,
  2: <FiTruck size={28} />,
  3: <FiPercent size={28} />,
  4: <FiThumbsUp size={28} />,
};

export default function FeaturesStrip() {
  return (
    <section aria-label="Store features">
      <div className="border-t border-slate-200 pt-8 sm:pt-10">
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4 xl:gap-10">
          {featureItems.map((item, index) => (
            <div
              key={item.id}
              className={`flex items-start gap-4 ${
                index !== featureItems.length - 1
                  ? "xl:border-r xl:border-slate-200"
                  : ""
              } xl:pr-8`}
            >
              <div className="shrink-0 pt-1 text-slate-500">
                {iconMap[item.id]}
              </div>
              <p className="text-lg font-medium leading-8 text-slate-900 sm:text-xl">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}