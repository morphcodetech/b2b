import { useState, useEffect } from "react";
import Bellpepper from "../assets/bellpepper.png";
import Eggplant from "../assets/eggplant.png";
import Onion from "../assets/onion.png";

import {
  FiMinus,
  FiPlus,
  FiTrash2,
  FiBookmark,
  FiArrowLeft,
  FiCheckCircle
} from "react-icons/fi";

const Cart = () => {
  const initialProducts = [
    { id: 1, name: "Bell Pepper", soldBy: "Fresho", weight: "500 g", price: 35.10, originalPrice: 45.68, image: Bellpepper },
    { id: 2, name: "Eggplant", soldBy: "Nesto", weight: "250 g", price: 52.95, originalPrice: 68.49, image: Eggplant },
    { id: 3, name: "Onion", soldBy: "Basket", weight: "750 g", price: 67.36, originalPrice: 96.58, image: Onion }
  ];

  const [cartItems, setCartItems] = useState(
    initialProducts.map(item => ({ ...item, quantity: 1 }))
  );
  
  // State for the "Pop-up" message
  const [toast, setToast] = useState({ show: false, message: "" });

  // Auto-hide toast after 3 seconds
  useEffect(() => {
    if (toast.show) {
      const timer = setTimeout(() => setToast({ show: false, message: "" }), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast.show]);

  const triggerToast = (msg) => {
    setToast({ show: true, message: msg });
  };

  const increase = (id) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decrease = (id) => {
    setCartItems(cartItems.map(item =>
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  const removeItem = (id, name) => {
    setCartItems(cartItems.filter(item => item.id !== id));
    triggerToast(`${name} removed from cart.`);
  };

  const saveForLater = (name) => {
    triggerToast(`${name} saved for later!`);
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = cartItems.length > 0 ? 6.9 : 0;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Toast Notification Pop-up */}
      {toast.show && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-full shadow-2xl animate-bounce">
          <FiCheckCircle className="text-green-400" />
          <span>{toast.message}</span>
        </div>
      )}

      {/* Navigation */}
      <nav className="bg-white border-b py-4 px-6 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <button className="flex items-center gap-2 text-gray-600 hover:text-[#FA6C48] transition-colors">
            <FiArrowLeft />
            <span className="hidden sm:inline">Back to Shop</span>
          </button>
          <h1 className="text-xl font-bold text-[#FA6C48] tracking-tighter">ANGRO</h1>
          <div className="w-10"></div> {/* Spacer */}
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-6 md:py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Cart Items List */}
          <div className="flex-1 bg-white border rounded-xl shadow-sm overflow-hidden">
            {cartItems.length > 0 ? (
              <div className="divide-y">
                {cartItems.map(product => (
                  <div key={product.id} className="p-4 md:p-6 flex flex-col sm:flex-row items-center gap-4 md:gap-6">
                    {/* Image - Responsive sizing */}
                    <div className="w-24 h-24 flex-shrink-0 bg-gray-50 border rounded-lg p-2 flex items-center justify-center">
                      <img src={product.image} alt={product.name} className="max-h-full object-contain" />
                    </div>

                    {/* Info */}
                    <div className="flex-1 text-center sm:text-left space-y-1">
                      <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
                      <p className="text-xs text-gray-500 uppercase tracking-wider">
                        Sold by <span className="text-[#FA6C48] font-medium">{product.soldBy}</span>
                      </p>
                      <p className="text-sm text-gray-400">{product.weight}</p>
                    </div>

                    {/* Price & Qty Controls - Responsive Grid */}
                    <div className="grid grid-cols-2 sm:flex sm:items-center gap-6 w-full sm:w-auto">
                      <div className="text-left sm:text-center">
                        <p className="text-[10px] text-gray-400 uppercase font-bold">Price</p>
                        <p className="font-bold text-gray-800">${product.price.toFixed(2)}</p>
                        <p className="text-xs text-gray-400 line-through">${product.originalPrice}</p>
                      </div>

                      <div className="text-right sm:text-center">
                        <p className="text-[10px] text-gray-400 uppercase font-bold mb-1">Qty</p>
                        <div className="flex items-center bg-gray-100 rounded-lg p-1">
                          <button onClick={() => decrease(product.id)} className="p-1 hover:bg-white rounded shadow-sm transition">
                            <FiMinus size={14} />
                          </button>
                          <span className="px-3 text-sm font-bold min-w-[30px] text-center">{product.quantity}</span>
                          <button onClick={() => increase(product.id)} className="p-1 hover:bg-white rounded shadow-sm transition">
                            <FiPlus size={14} />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Total & Actions */}
                    <div className="flex flex-row sm:flex-col items-center justify-between sm:justify-center gap-4 w-full sm:w-24 border-t sm:border-none pt-4 sm:pt-0">
                      <div className="text-left sm:text-center">
                        <p className="text-[10px] text-gray-400 uppercase font-bold">Total</p>
                        <p className="font-bold text-[#FA6C48]">${(product.price * product.quantity).toFixed(2)}</p>
                      </div>
                      
                      <div className="flex sm:flex-col gap-3">
                        <button 
                          onClick={() => saveForLater(product.name)}
                          className="p-2 text-gray-400 hover:text-blue-500 transition-colors" 
                          title="Save for Later"
                        >
                          <FiBookmark size={18} />
                        </button>
                        <button 
                          onClick={() => removeItem(product.id, product.name)}
                          className="p-2 text-gray-400 hover:text-red-500 transition-colors" 
                          title="Remove"
                        >
                          <FiTrash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-20 text-center space-y-4">
                <p className="text-gray-400 text-lg">Your cart is empty</p>
                <button className="text-[#FA6C48] font-semibold underline">Go Shopping</button>
              </div>
            )}
          </div>

          {/* Cart Summary */}
          <aside className="w-full lg:w-[380px]">
            <div className="bg-white border rounded-xl p-6 shadow-sm sticky top-24">
              <h2 className="text-xl font-bold mb-6 text-gray-800 border-b pb-4">Order Summary</h2>

              <div className="flex mb-6 group">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  className="flex-1 border border-gray-200 rounded-l-lg px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#FA6C48] transition-all"
                />
                <button className="bg-[#FA6C48] text-white px-5 rounded-r-lg hover:bg-[#e55c3a] font-bold text-sm transition-colors">
                  Apply
                </button>
              </div>

              <div className="space-y-4 text-sm mb-6">
                <div className="flex justify-between text-gray-500">
                  <span>Subtotal</span>
                  <span className="font-semibold text-gray-800">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Shipping Fee</span>
                  <span className="font-semibold text-gray-800">${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-bold border-t pt-4 text-gray-900">
                  <span>Total</span>
                  <span className="text-[#FA6C48]">${total.toFixed(2)}</span>
                </div>
              </div>

              <button className="w-full bg-[#FA6C48] text-white py-4 rounded-xl hover:bg-[#e55c3a] font-bold shadow-lg shadow-orange-200 transition-all hover:-translate-y-1 active:translate-y-0">
                Proceed To Checkout
              </button>

              <button className="w-full mt-4 flex items-center justify-center gap-2 text-gray-500 hover:text-gray-800 transition-colors text-sm font-medium">
                <FiArrowLeft />
                Return To Shopping
              </button>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Cart;