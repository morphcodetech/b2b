export default function RatingFilter(){

const ratings=[5,4,3,2,1]

return(

<div className="space-y-3">

{ratings.map(r=>(
<label key={r} className="flex items-center justify-between text-sm">

<div className="flex items-center gap-3">

<input type="checkbox"/>

<span className="text-yellow-500">
{"★".repeat(r)}{"☆".repeat(5-r)}
</span>

</div>

<span className="text-gray-500">({r} Star)</span>

</label>
))}

</div>

)

}