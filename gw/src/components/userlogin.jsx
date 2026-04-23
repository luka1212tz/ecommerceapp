import { useState } from "react";
import Navbar from "./navbar";

function Userlogin(cart, setSearch) {
  const [gmail, setgmail] = useState("");
  const [password, setpassword] = useState("");
  let [dark, setDark] = useState(false);

  const LoginForm = (e) => {
    e.preventDefault();

    if (gmail === "" || password === "") {
      alert("Enter something");
    } else {
      alert("Login successful");
    }
  };

  return (
    <div className={
        dark
          ? "bg-[#1F1F1F] text-white min-h-screen"
          : "bg-gray-100 text-black min-h-screen"
      }>
      
      
      
    <Navbar
  cart={cart}

/>
      

    <button
          onClick={() => setDark(!dark)}
          className="bg-yellow-400 px-4 py-2 rounded hover:bg-yellow-500 transition m-5"
        >
          Toggle Dark Mode
        </button>


      <div className="flex items-center justify-center px-4 py-16">
        
        <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
          
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Sign In
          </h2>

          <form onSubmit={LoginForm} className="space-y-5">
            
            <input
              type="email"
              placeholder="Email"
              value={gmail}
              onChange={(e) => setgmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-2xl bg-white shadow-sm outline-none"
              
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-2xl bg-white shadow-sm outline-none"
            />

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
            >
              Login
            </button>

          </form>

        </div>
      </div>
    </div>
  );
}

export default Userlogin;