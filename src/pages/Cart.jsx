
import { FiMinus, FiPlus, FiTrash2, FiBookmark, FiArrowLeft } from "react-icons/fi";

const CartPage = () => {
  

  
  const products = [
    { id: 1, name: "Bell pepper", soldBy: "Fresho", weight: "500 g", price: 35.10, originalPrice: 45.68, save: 20.68, image: "https://via.placeholder.com/100" },
    { id: 2, name: "Eggplant", soldBy: "Nesto", weight: "250 g", price: 52.95, originalPrice: 68.49, save: 15.14, image: "https://via.placeholder.com/100" },
    { id: 3, name: "Onion", soldBy: "Basket", weight: "750 g", price: 67.36, originalPrice: 96.58, save: 29.22, image: "https://via.placeholder.com/100" },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      
      

      {/* 2. BODY SECTION */}
      <main className="max-w-6xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-10 text-center md:text-left">Your Shopping Cart</h1>

        <div className="space-y-8">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col md:flex-row items-center gap-8 pb-8 border-b border-gray-100 last:border-0">
              
              {/* Product Image */}
              <div className="w-32 h-32 bg-gray-50 rounded-xl p-4 flex items-center justify-center">
                <img src={product.image} alt={product.name} className="max-h-full object-contain" />
              </div>

              {/* Product Info */}
              <div className="flex-1 space-y-1 text-center md:text-left">
                <h3 className="text-xl font-bold">{product.name}</h3>
                <p className="text-sm text-gray-500">Sold By: <span className="text-[#FA6C48] font-medium">{product.soldBy}</span></p>
                <p className="text-sm text-gray-400 font-light">Quantity - {product.weight}</p>
              </div>

              {/* Price Section */}
              <div className="flex flex-col items-center md:items-start w-32">
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Price</p>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold">${product.price}</span>
                  <span className="text-sm text-gray-400 line-through">${product.originalPrice}</span>
                </div>
                <p className="text-xs text-[#FA6C48] font-bold mt-1">You Save : ${product.save}</p>
              </div>

              {/* Quantity Selector */}
              <div className="flex flex-col items-center w-32">
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">Qty</p>
                <div className="flex items-center bg-gray-100 rounded-full p-1">
                  <button className="p-2 hover:bg-white rounded-full transition-all shadow-sm"><FiMinus size={14}/></button>
                  <span className="px-4 font-bold text-sm">0</span>
                  <button className="p-2 hover:bg-white rounded-full transition-all shadow-sm text-[#FA6C48]"><FiPlus size={14}/></button>
                </div>
              </div>

              {/* Total Section */}
              <div className="w-24 text-center md:text-left">
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Total</p>
                <span className="text-xl font-bold">${product.price}</span>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-2 w-32">
                <button className="flex items-center gap-2 text-sm font-semibold text-[#FA6C48] hover:opacity-80 transition-opacity">
                  <FiBookmark /> Save for later
                </button>
                <button className="flex items-center gap-2 text-sm font-semibold text-red-500 hover:text-red-700">
                  <FiTrash2 /> Remove
                </button>
              </div>

            </div>
          ))}
        </div>
      </main>

    </div>
  );
};

export default CartPage;