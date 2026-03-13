import Slider from "rc-slider";
import { useState } from "react";

export default function PriceSlider(){

const [range,setRange] = useState([0,500000])

return(

<div>

<div className="flex justify-between mb-4">

<span className="bg-primary text-white px-3 py-1 rounded">
$ {range[0]}
</span>

<span className="bg-primary text-white px-3 py-1 rounded">
$ {range[1]}
</span>

<span className="bg-gray-200 text-gray-600 px-3 py-1 rounded">
$ 1,000,000
</span>

</div>

<Slider
range
min={0}
max={1000000}
value={range}
onChange={setRange}
trackStyle={[{backgroundColor:"#16a085"}]}
handleStyle={[
{borderColor:"#16a085"},
{borderColor:"#16a085"}
]}
/>

<input
className="border w-full mt-4 p-2 rounded"
value={`${range[0]};${range[1]}`}
readOnly
/>

</div>

)
}