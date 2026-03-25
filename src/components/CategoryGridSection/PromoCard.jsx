import React from "react";
import ShopNowButton from "./ShopNowButton";

const PromoCard = ({ card, redirectUrl }) => (
  <article className={`relative h-62.5 rounded-2xl overflow-hidden ${card.bg}`}>
    <img
      src={card.image}
      alt={card.title.replace("\n", " ")}
      className="absolute inset-0 h-full w-full object-cover"
    />

    <div className="relative z-10 p-7 max-w-47.5">
      <h3 className="text-[22px] sm:text-[26px] leading-[1.15] font-bold text-[#1e2236] whitespace-pre-line">
        {card.title}
      </h3>
      <p className="mt-3 text-[14px] text-[#555]">
        Starting at{" "}
        <span className="text-[#eb4666] font-bold">{card.price}</span>
      </p>
      <ShopNowButton redirectUrl={redirectUrl} />
    </div>
  </article>
);

export default PromoCard;
