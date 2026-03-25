import React from "react";
import promoCards from "./promoCardsData";
import PromoCard from "./PromoCard";

const CategoryGridSection = () => {
  const redirectUrl = "https://angro-product.vercel.app/";

  return (
    <section className="pb-10 bg-white">
      <div className="max-w-325 mx-auto px-4 lg:px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {promoCards.map((card) => (
            <PromoCard key={card.id} card={card} redirectUrl={redirectUrl} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGridSection;
