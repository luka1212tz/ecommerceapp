import { Link } from "react-router-dom";

function Navbar({ cart = [], wishlist = [], setSearch = () => {} }) {
  return (
    <div className="bg-[#0f172a] text-white border-b border-gray-700">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* LEFT */}
        <div className="flex items-center gap-8">
          <Link
            to="/"
            className="text-2xl font-bold tracking-wide hover:text-yellow-400 transition"
          >
            <img src="./eCommerce-logo.jpg" alt=""  className="w-15  h-15" />
          </Link>

          <span className="hidden md:block text-sm ">
            shipping <br />to <span className="text-red-700">georgia</span>
          </span>
        </div>

        {/* SEARCH */}
        <div className="hidden md:flex flex-1 max-w-xl mx-10">
          <div className="flex w-full bg-white rounded-full overflow-hidden shadow-md">
            <input
              type="text"
              placeholder="Search products..."
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 px-4 py-2 text-black outline-none"
            />

            <button className="bg-yellow-400 hover:bg-yellow-500 px-5 text-black font-semibold transition">
              Search
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-6 text-sm">

          <Link
            to="/login"
            className="hover:text-yellow-400 transition"
          >
            Sign In
          </Link>

          {/*  Wishlist */}
          <Link
            to="/wishlist"
            className="hover:text-yellow-400 transition"
          >
            Wishlist ({wishlist.length})
          </Link>

          {/*  Cart */}
          <Link
            to="/cart"
            className="relative bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold hover:bg-yellow-500 transition"
          >
            Cart ({cart.length})
          </Link>

        </div>
      </div>
    </div>
  );
}

export default Navbar;