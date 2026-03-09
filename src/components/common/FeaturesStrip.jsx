import { FiShoppingBag, FiTruck, FiPercent, FiThumbsUp } from "react-icons/fi";

const items = [
  {
    id: 1,
    icon: <FiShoppingBag size={28} />,
    title: "Every Fresh Products",
  },
  {
    id: 2,
    icon: <FiTruck size={28} />,
    title: "Free Delivery For Order Over $50",
  },
  {
    id: 3,
    icon: <FiPercent size={28} />,
    title: "Daily Mega Discounts",
  },
  {
    id: 4,
    icon: <FiThumbsUp size={28} />,
    title: "Best Price On The Market",
  },
];

export default function FeaturesStrip() {
  return (
    <div>
      <div className="border-t border-slate-200 px-1 pt-8 sm:pt-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:gap-10 xl:grid-cols-4">
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`flex items-start gap-4 ${
                index !== items.length - 1 ? "xl:border-r xl:border-slate-200" : ""
              } xl:pr-8`}
            >
              <div className="shrink-0 pt-1 text-slate-500">{item.icon}</div>
              <p className="text-xl font-medium leading-8 text-slate-900">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}