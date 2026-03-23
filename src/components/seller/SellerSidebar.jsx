import FilterSection from "../ui/FilterSection";
import CheckboxList from "../ui/CheckboxList";
import RatingFilter from "../ui/RatingFilter";
import PriceSlider from "../ui/PriceSlider";

import { FaFacebookF, FaGooglePlusG, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "../../assets/logo.png";

export default function SellerSidebar() {

const categories = [
  { name: "Marinades", count: "05" },
  { name: "Mutton & Lamb", count: "09" },
  { name: "Port & other Meats", count: "06" },
  { name: "Poultry", count: "01" },
  { name: "Sausages, bacon & Salami", count: "03" },
];

const discount = [
  { name: "upto 5%", count: "06" },
  { name: "5% - 10%", count: "08" },
  { name: "10% - 15%", count: "10" },
  { name: "15% - 25%", count: "14" },
  { name: "More than 25%", count: "13" },
];

const packsize = [
  { name: "400 to 500 g", count: "05" },
  { name: "500 to 700 g", count: "02" },
  { name: "700 to 1 kg", count: "04" },
  { name: "120 -150 g each Vacuum", count: "06" },
  { name: "1 pc", count: "09" },
];

return (

<div className="space-y-6">

  {/*  SELLER CARD  */}
  <div className="bg-white rounded-2xl shadow-sm p-6">

    <div className="flex items-center gap-4">
     <img
     src={logo}
     alt="logo"
     className="w-20 h-20 object-contain"
     />

      <div>
        <h2 className="text-lg font-semibold tracking-wide">
          GROCERY STORE
        </h2>

        <div className="flex items-center gap-2 mt-1">
          <div className="text-yellow-500 text-sm">★★★★☆</div>
          <span className="text-gray-400 text-sm">4.3 of 5</span>
        </div>
      </div>
    </div>

    <p className="text-gray-500 text-sm mt-5 leading-relaxed">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
      aldskadskm eiusmod tempor incididunt.
    </p>

    <div className="border-t my-5"></div>

    <h3 className="font-semibold text-base mb-3">
      Perfect for you, if you like
    </h3>

    <div className="flex flex-wrap gap-2">
      {["Vegetable", "Fruit", "Meat", "Bakery", "Cake", "Organic"].map((tag, i) => (
        <span
          key={i}
          className="bg-gray-100 text-gray-600 px-3 py-1 rounded-md text-sm"
        >
          {tag}
        </span>
      ))}
    </div>

    <div className="border-t my-5"></div>

    <div className="flex items-center gap-3 text-gray-600">
      <span className="font-semibold text-sm">Follow Us :</span>

      <FaFacebookF className="cursor-pointer hover:text-primary" />
      <FaGooglePlusG className="cursor-pointer hover:text-primary" />
      <FaTwitter className="cursor-pointer hover:text-primary" />
      <FaInstagram className="cursor-pointer hover:text-primary" />
    </div>

  </div>

  {/* FILTER SECTIONS  */}

  {/* Categories */}
  <FilterSection title="Categories">

    <input
      className="border p-2 rounded w-full mb-4"
      placeholder="Search"
    />

    <CheckboxList items={categories} />

  </FilterSection>

  {/* Food Preference */}
  <FilterSection title="Food Preference">

    <CheckboxList
      items={[
        { name: "Vegetarian", count: "08" },
        { name: "Non Vegetarian", count: "09" },
      ]}
    />

  </FilterSection>

  {/* Price */}
  <FilterSection title="Price">
    <PriceSlider />
  </FilterSection>

  {/* Rating */}
  <FilterSection title="Rating">
    <RatingFilter />
  </FilterSection>

  {/* Discount */}
  <FilterSection title="Discount">
    <CheckboxList items={discount} />
  </FilterSection>

  {/* Pack Size */}
  <FilterSection title="Pack Size">
    <CheckboxList items={packsize} />
  </FilterSection>

</div>

);

}