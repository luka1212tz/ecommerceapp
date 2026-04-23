import { useEffect, useState } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import { Link } from "react-router-dom";

function Mainn({ cart, setCart, wishlist, setWishlist }) {
  let [products, setProducts] = useState([]);
  let [selectedCategory, setSelectedCategory] = useState("all");
  let [dark, setDark] = useState(false);
  let [selectedPrice, setSelectedPrice] = useState("all");
  let [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=194")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);

  function addToCart(product) {
    let newCart = [...cart];
    newCart.push(product);
    setCart(newCart);
  }

  

  let filteredProducts = products.filter((product) => {
    let categoryMatch =
      selectedCategory === "all" ||
      product.category === selectedCategory;

    let priceMatch =
      selectedPrice === "all" ||
      product.price <= selectedPrice;

    let searchMatch =
      product.title.toLowerCase().includes(search.toLowerCase());

    return categoryMatch && priceMatch && searchMatch;




  });

 return (
  <div className={dark ? "bg-[#1F1F1F] text-white min-h-screen" : "bg-gray-100 text-black min-h-screen"}>
    
    <Navbar
      cart={cart}
      setSearch={setSearch}
      wishlist={wishlist}
    />

    <div className="p-4">
      <button
        onClick={() => setDark(!dark)}
        className="bg-yellow-400 px-4 py-2 rounded hover:bg-yellow-500 transition w-full sm:w-auto"
      >
        Toggle Dark Mode
      </button>
    </div>

    <div className="flex flex-col lg:flex-row">
      
      <Sidebar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedPrice={selectedPrice}
        setSelectedPrice={setSelectedPrice}
        dark={dark}
      />

      <div className="flex-1 p-4 sm:p-6 lg:p-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
          Products
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <Link to={`/product/${product.id}`}>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
              </Link>

              <h2 className="font-semibold text-sm sm:text-base">
                {product.title}
              </h2>

              <p className="font-bold mb-2">${product.price}</p>

              <button
                onClick={() => addToCart(product)}
                className="bg-yellow-400 px-3 py-1 rounded w-full"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
}

export default Mainn;