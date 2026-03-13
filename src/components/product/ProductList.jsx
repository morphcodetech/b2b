import products from "../../data/products";

export default function ProductList() {

return(

<div className="space-y-6">

{products.map((product)=>(

<div key={product.id} className="bg-white shadow rounded-xl p-4 flex gap-6">

{/* Product Image */}
<img
src={product.image}
alt={product.name}
className="w-32 h-32 object-contain"
/>

{/* Product Info */}
<div>

<h3 className="font-semibold text-lg">
{product.name}
</h3>

<p className="text-gray-500 text-sm mt-2">
Cheesy feta cheese mascarpone cheese and wine hard cheese.
</p>

<div className="text-yellow-500 mt-2">
★★★★☆ ({product.rating})
</div>

<p className="text-gray-500 text-sm mt-1">
{product.size}
</p>

<div className="flex gap-2 mt-2">

<span className="text-green-600 font-semibold">
${product.price}
</span>

<span className="line-through text-gray-400">
${product.oldPrice}
</span>

</div>

<button className="mt-3 bg-gray-100 px-6 py-2 rounded-full">
Add +
</button>

</div>

</div>

))}

</div>

)

}