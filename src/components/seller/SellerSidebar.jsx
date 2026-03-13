import FilterSection from "../ui/FilterSection"
import CheckboxList from "../ui/CheckboxList"
import RatingFilter from "../ui/RatingFilter"
import PriceSlider from "../ui/PriceSlider"

export default function SellerSidebar(){

const categories=[
{name:"Marinades",count:"05"},
{name:"Mutton & Lamb",count:"09"},
{name:"Port & other Meats",count:"06"},
{name:"Poultry",count:"01"},
{name:"Sausages, bacon & Salami",count:"03"},
]

const discount=[
{name:"upto 5%",count:"06"},
{name:"5% - 10%",count:"08"},
{name:"10% - 15%",count:"10"},
{name:"15% - 25%",count:"14"},
{name:"More than 25%",count:"13"},
]

const packsize=[
{name:"400 to 500 g",count:"05"},
{name:"500 to 700 g",count:"02"},
{name:"700 to 1 kg",count:"04"},
{name:"120 -150 g each Vacuum",count:"06"},
{name:"1 pc",count:"09"},
]

return(

<div>

{/* Categories */}

<FilterSection title="Categories">

<input
className="border p-2 rounded w-full mb-4"
placeholder="Search"
/>

<CheckboxList items={categories}/>

</FilterSection>

{/* Food Preference */}

<FilterSection title="Food Preference">

<CheckboxList
items={[
{name:"Vegetarian",count:"08"},
{name:"Non Vegetarian",count:"09"}
]}
/>

</FilterSection>

{/* Price */}

<FilterSection title="Price">

<PriceSlider/>

</FilterSection>

{/* Rating */}

<FilterSection title="Rating">

<RatingFilter/>

</FilterSection>

{/* Discount */}

<FilterSection title="Discount">

<CheckboxList items={discount}/>

</FilterSection>

{/* Pack Size */}

<FilterSection title="Pack Size">

<CheckboxList items={packsize}/>

</FilterSection>

</div>

)

}