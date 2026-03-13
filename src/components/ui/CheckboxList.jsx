export default function CheckboxList({items}){

return(

<div className="space-y-3 max-h-48 overflow-y-auto">

{items.map((item,i)=>(
<label
key={i}
className="flex justify-between items-center text-sm"
>

<div className="flex gap-2 items-center">

<input type="checkbox"/>

<span>{item.name}</span>

</div>

<span className="text-gray-500">
({item.count})
</span>

</label>
))}

</div>

)

}