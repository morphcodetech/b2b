import { useState } from "react";
import Bellpepper from "../assets/bellpepper.png";
import Eggplant from "../assets/eggplant.png";
import Onion from "../assets/onion.png";

import {
  FiMinus,
  FiPlus,
  FiTrash2,
  FiBookmark,
  FiArrowLeft
} from "react-icons/fi";

const Cart = () => {

  const initialProducts = [
  {
    id: 1,
    name: "Bell Pepper",
    soldBy: "Fresho",
    weight: "500 g",
    price: 35.10,
    originalPrice: 45.68,
    image: Bellpepper
  },
  {
    id: 2,
    name: "Eggplant",
    soldBy: "Nesto",
    weight: "250 g",
    price: 52.95,
    originalPrice: 68.49,
    image: Eggplant
  },
  {
    id: 3,
    name: "Onion",
    soldBy: "Basket",
    weight: "750 g",
    price: 67.36,
    originalPrice: 96.58,
    image: Onion
  }
];

  const [cartItems, setCartItems] = useState(
    initialProducts.map(item => ({ ...item, quantity: 1 }))
  );

  const increase = (id) => {
    setCartItems(
      cartItems.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decrease = (id) => {
    setCartItems(
      cartItems.map(item =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const shipping = 6.9;

  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Simple Navigation */}
      <nav className="bg-white border-b py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <button className="flex items-center gap-2 text-gray-600 hover:text-[#FA6C48]">
            <FiArrowLeft />
            Back to Shop
          </button>

          <h1 className="text-xl font-bold text-[#FA6C48]">
            ANGRO
          </h1>
        </div>
      </nav>

      {/* Main Body */}
      <main className="max-w-7xl mx-auto px-4 py-10">

        <div className="flex flex-col lg:flex-row gap-8">

          {/* Cart Items */}
          <div className="flex-1 bg-white border rounded-lg p-6">

            {cartItems.map(product => {

              const itemTotal = product.price * product.quantity;

              return (
                <div
                  key={product.id}
                  className="flex flex-col md:flex-row items-center gap-6 py-6 border-b last:border-none"
                >

                  {/* Image */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-24 h-24 object-contain border rounded-lg p-2"
                  />

                  {/* Info */}
                  <div className="flex-1 space-y-1">
                    <h3 className="text-lg font-semibold">
                      {product.name}
                    </h3>

                    <p className="text-sm text-gray-500">
                      Sold by{" "}
                      <span className="text-[#FA6C48]">
                        {product.soldBy}
                      </span>
                    </p>

                    <p className="text-sm text-gray-400">
                      {product.weight}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="text-center md:text-left">
                    <p className="text-xs text-gray-400 uppercase">
                      Price
                    </p>

                    <p className="font-semibold text-lg">
                      ${product.price}
                    </p>

                    <p className="text-sm text-gray-400 line-through">
                      ${product.originalPrice}
                    </p>
                  </div>

                  {/* Quantity */}
                  <div>
                    <p className="text-xs text-gray-400 uppercase text-center mb-2">
                      Qty
                    </p>

                    <div className="flex items-center bg-gray-100 rounded-full px-2 py-1">

                      <button
                        onClick={() => decrease(product.id)}
                        className="p-1 hover:bg-white rounded-full"
                      >
                        <FiMinus size={14} />
                      </button>

                      <span className="px-3 text-sm font-semibold">
                        {product.quantity}
                      </span>

                      <button
                        onClick={() => increase(product.id)}
                        className="p-1 hover:bg-white rounded-full"
                      >
                        <FiPlus size={14} />
                      </button>

                    </div>
                  </div>

                  {/* Total */}
                  <div className="text-center md:text-left">
                    <p className="text-xs text-gray-400 uppercase">
                      Total
                    </p>

                    <p className="font-semibold text-lg">
                      ${itemTotal.toFixed(2)}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col gap-2">

                    <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-[#FA6C48]">
                      <FiBookmark />
                      Save
                    </button>

                    <button
                      onClick={() => removeItem(product.id)}
                      className="flex items-center gap-1 text-sm text-red-500 hover:text-red-600"
                    >
                      <FiTrash2 />
                      Remove
                    </button>

                  </div>

                </div>
              );
            })}

          </div>

          {/* Cart Summary */}
          <div className="w-full lg:w-[350px]">

            <div className="bg-white border rounded-lg p-6 space-y-5">

              <h2 className="text-xl font-semibold">
                Cart Total
              </h2>

              {/* Coupon */}
              <div className="flex">
                <input
                  type="text"
                  placeholder="Enter Coupon Code"
                  className="flex-1 border rounded-l-md px-3 py-2 text-sm focus:outline-none focus:border-[#FA6C48]"
                />

                <button className="bg-[#FA6C48] text-white px-4 rounded-r-md hover:bg-[#e55c3a]">
                  Apply
                </button>
              </div>

              {/* Prices */}
              <div className="space-y-3 text-sm">

                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>${shipping}</span>
                </div>

              </div>

              <div className="flex justify-between font-semibold text-lg border-t pt-4">
                <span>Total</span>
                <span className="text-[#FA6C48]">
                  ${total.toFixed(2)}
                </span>
              </div>

              {/* Buttons */}
              <button className="w-full bg-[#FA6C48] text-white py-3 rounded-md hover:bg-[#e55c3a] font-semibold transition">
                Proceed To Checkout
              </button>

              <button className="w-full flex items-center justify-center gap-2 bg-gray-100 py-3 rounded-md text-gray-600 hover:bg-gray-200">
                <FiArrowLeft />
                Return To Shopping
              </button>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
};

export default Cart;