import { FaChevronUp } from "react-icons/fa";
import { useState } from "react";

export default function FilterSection({title, children}){

const [open,setOpen] = useState(true)

return(

<div className="bg-white rounded-xl shadow p-5 mb-6">

<div
className="flex justify-between items-center cursor-pointer"
onClick={()=>setOpen(!open)}
>

<h3 className="font-semibold text-lg border-b-2 border-primary pb-1">
{title}
</h3>

<FaChevronUp
className={`transition ${open ? "" : "rotate-180"}`}
/>

</div>

{open && <div className="mt-4">{children}</div>}

</div>

)

}