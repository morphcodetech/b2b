import React from "react";
import { FaArrowRight } from "react-icons/fa";
import card1 from "../../assets/categorycard/card1.png";
import card2 from "../../assets/categorycard/img2.png";
import card3 from "../../assets/categorycard/img3.png";
import card4 from "../../assets/categorycard/img4.png";

const CategoryGridSection = () => {
  const promoCards = [
    {
      id: 1,
      title: "Everyday Fresh\nMeat",
      price: "$60.99",
      image: card1,
      bg: "bg-[#e4efff]",
    },
    {
      id: 2,
      title: "Daily Fresh\nVegetables",
      price: "$60.99",
      image: card2,
      bg: "bg-[#f3f3f3]",
    },
    {
      id: 3,
      title: "Everyday Fresh\nMilk",
      price: "$60.99",
      image: card3,
      bg: "bg-[#f3f3f3]",
    },
    {
      id: 4,
      title: "Everyday Fresh\nFruits",
      price: "$60.99",
      image: card4,
      bg: "bg-[#f5f5f5]",
    },
  ];

  return (
    <section className="pb-10 bg-white">
      <div className="max-w-[1300px] mx-auto px-4 lg:px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {promoCards.map((card) => (
            <article
              key={card.id}
              className={`relative h-[190px] rounded-[16px] overflow-hidden ${card.bg}`}
            >
              <img
                src={card.image}
                alt={card.title.replace("\n", " ")}
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="relative z-10 p-7 max-w-[170px]">
                <h3 className="text-[22px] sm:text-[26px] leading-[1.15] font-bold text-[#1e2236] whitespace-pre-line">
                  {card.title}
                </h3>
                <p className="mt-3 text-[14px] text-[#555]">
                  Starting at{" "}
                  <span className="text-[#eb4666] font-bold">{card.price}</span>
                </p>
                <button className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#1f9bb5] text-white text-[13px] font-semibold px-5 py-2.5 hover:bg-[#18859c] transition-colors duration-200">
                  Shop Now <FaArrowRight size={11} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGridSection;
