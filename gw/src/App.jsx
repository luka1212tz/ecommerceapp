import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Mainn from "./components/mainn";
import Wishlist from "./components/Wishlist";
import ProductDetails from "./components/ProductDetails";
import Userlogin from "./components/userlogin";
import Checkout from "./components/checkoutui";
import Cart from "./components/cart";

export default function App() {
  let [wishlist, setWishlist] = useState([]);
  let [cart, setCart] = useState([]);

  return (
    <Routes>
      <Route path="/" element={<Mainn wishlist={wishlist} setWishlist={setWishlist} cart={cart} setCart={setCart}/>}/>
      <Route path="/product/:id" element={<ProductDetails wishlist={wishlist} setWishlist={setWishlist} cart={cart} setCart={setCart} />}/>
      <Route path="/wishlist" element={<Wishlist wishlist={wishlist} setWishlist={setWishlist} />}/>
      <Route path="/cart"  element={<Cart cart={cart} setCart={setCart} />} />
      <Route path="/login" element={<Userlogin />} /> 
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
}