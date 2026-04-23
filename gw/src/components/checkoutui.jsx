import Navbar from "./navbar";
import { useState } from "react";

function Checkout(cart, setSearch) {
  
  let [dark, setDark] = useState(false);
  
  
  
  return (
    <div className={
        dark
          ? "bg-[#1F1F1F] text-white min-h-screen"
          : "bg-gray-100 text-black min-h-screen"
      }>
      
      <Navbar
  cart={cart}
  setSearch={setSearch}

/>
     

      <button
          onClick={() => setDark(!dark)}
          className="bg-yellow-400 px-4 py-2 rounded hover:bg-yellow-500 transition m-5"
        >
          Toggle Dark Mode
        </button>


      <div className="max-w-5xl mx-auto px-6 py-10">
        
        <div className="bg-white shadow-xl rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">
            Checkout
          </h2>

          <form className="space-y-10">

          
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-700">
                Information
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" placeholder="Full Name" className="w-full px-4 py-3 border border-gray-200 rounded-2xl bg-white shadow-sm outline-none" />
                <input type="email" placeholder="Email" className="w-full px-4 py-3 border border-gray-200 rounded-2xl bg-white shadow-sm outline-none" />
                <input type="text" placeholder="Phone Number" className="w-full px-4 py-3 border border-gray-200 rounded-2xl bg-white shadow-sm outline-none" />
                <input type="text" placeholder="Address" className="w-full px-4 py-3 border border-gray-200 rounded-2xl bg-white shadow-sm outline-none" />
                <input type="text" placeholder="City" className="w-full px-4 py-3 border border-gray-200 rounded-2xl bg-white shadow-sm outline-none" />
                <input type="text" placeholder="Zip Code" className="w-full px-4 py-3 border border-gray-200 rounded-2xl bg-white shadow-sm outline-none" />
              </div>

              <select className="mt-4 input">
                <option>GEL</option>
                <option>USD</option>
                <option>EUR</option>
              </select>
            </div>

        
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-700">
                Payment Info
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" placeholder="Cardholder Name" className="w-full px-4 py-3 border border-gray-200 rounded-2xl bg-white shadow-sm outline-none" />
                <input type="text" placeholder="Card Number" className="w-full px-4 py-3 border border-gray-200 rounded-2xl bg-white shadow-sm outline-none" />
                <input type="text" placeholder="CVC" className="w-full px-4 py-3 border border-gray-200 rounded-2xl bg-white shadow-sm outline-none" />
                <input type="text" placeholder="Expiration Date (MM/YY)" className="w-full px-4 py-3 border border-gray-200 rounded-2xl bg-white shadow-sm outline-none" />
              </div>
            </div>

    
            <div className="flex items-center gap-2">
              <input type="checkbox" className="accent-black" />
              <label className="text-sm text-gray-600">
                I agree to the terms and conditions
              </label>
            </div>

          
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
            >
              Order Here
            </button>

          </form>
        </div>

      </div>
    </div>
  );
}

export default Checkout;