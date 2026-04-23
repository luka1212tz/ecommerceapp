function Sidebar({
  selectedCategory,
  setSelectedCategory,
  selectedPrice,
  setSelectedPrice,
  dark
}) {
  return (
    <div
      className={`w-full md:w-72 md:min-h-screen p-6 border-b md:border-b-0 md:border-r ${
        dark ? "bg-[#181818] border-gray-700" : "bg-white border-gray-200"
      }`}
    >
      <h2 className="text-2xl font-bold mb-8">Shop</h2>

      <div className="space-y-3 text-lg">

        <button onClick={() => setSelectedCategory("all")} className={`w-full text-left hover:pl-2 transition ${selectedCategory === "all" ? "text-yellow-500 font-bold" : ""}`}>All Products</button>

        <button
  onClick={() => setSelectedCategory("beauty")}
  className={`w-full text-left hover:pl-2 transition ${selectedCategory === "beauty" ? "text-yellow-500 font-bold" : ""}`}
>
  Beauty
</button>

<button
  onClick={() => setSelectedCategory("fragrances")}
  className={`w-full text-left hover:pl-2 transition ${selectedCategory === "fragrances" ? "text-yellow-500 font-bold" : ""}`}
>
  Fragrances
</button>

<button
  onClick={() => setSelectedCategory("furniture")}
  className={`w-full text-left hover:pl-2 transition ${selectedCategory === "furniture" ? "text-yellow-500 font-bold" : ""}`}
>
  Furniture
</button>

<button
  onClick={() => setSelectedCategory("groceries")}
  className={`w-full text-left hover:pl-2 transition ${selectedCategory === "groceries" ? "text-yellow-500 font-bold" : ""}`}
>
  Groceries
</button>

<button
  onClick={() => setSelectedCategory("home-decoration")}
  className={`w-full text-left hover:pl-2 transition ${selectedCategory === "home-decoration" ? "text-yellow-500 font-bold" : ""}`}
>
  Home Decoration
</button>

<button
  onClick={() => setSelectedCategory("kitchen-accessories")}
  className={`w-full text-left hover:pl-2 transition ${selectedCategory === "kitchen-accessories" ? "text-yellow-500 font-bold" : ""}`}
>
  Kitchen Accessories
</button>

<button
  onClick={() => setSelectedCategory("laptops")}
  className={`w-full text-left hover:pl-2 transition ${selectedCategory === "laptops" ? "text-yellow-500 font-bold" : ""}`}
>
  Laptops
</button>

<button
  onClick={() => setSelectedCategory("mens-shirts")}
  className={`w-full text-left hover:pl-2 transition ${selectedCategory === "mens-shirts" ? "text-yellow-500 font-bold" : ""}`}
>
  Mens Shirts
</button>

<button
  onClick={() => setSelectedCategory("mens-shoes")}
  className={`w-full text-left hover:pl-2 transition ${selectedCategory === "mens-shoes" ? "text-yellow-500 font-bold" : ""}`}
>
  Mens Shoes
</button>

<button
  onClick={() => setSelectedCategory("mens-watches")}
  className={`w-full text-left hover:pl-2 transition ${selectedCategory === "mens-watches" ? "text-yellow-500 font-bold" : ""}`}
>
  Mens Watches
</button>

<button
  onClick={() => setSelectedCategory("mobile-accessories")}
  className={`w-full text-left hover:pl-2 transition ${selectedCategory === "mobile-accessories" ? "text-yellow-500 font-bold" : ""}`}
>
  Mobile Accessories
</button>

<button
  onClick={() => setSelectedCategory("motorcycle")}
  className={`w-full text-left hover:pl-2 transition ${selectedCategory === "motorcycle" ? "text-yellow-500 font-bold" : ""}`}
>
  Motorcycle
</button>

<button
  onClick={() => setSelectedCategory("skin-care")}
  className={`w-full text-left hover:pl-2 transition ${selectedCategory === "skin-care" ? "text-yellow-500 font-bold" : ""}`}
>
  Skin Care
</button>

<button
  onClick={() => setSelectedCategory("smartphones")}
  className={`w-full text-left hover:pl-2 transition ${selectedCategory === "smartphones" ? "text-yellow-500 font-bold" : ""}`}
>
  Smartphones
</button>

<button
  onClick={() => setSelectedCategory("sports-accessories")}
  className={`w-full text-left hover:pl-2 transition ${selectedCategory === "sports-accessories" ? "text-yellow-500 font-bold" : ""}`}
>
  Sports Accessories
</button>

<button
  onClick={() => setSelectedCategory("sunglasses")}
  className={`w-full text-left hover:pl-2 transition ${selectedCategory === "sunglasses" ? "text-yellow-500 font-bold" : ""}`}
>
  Sunglasses
</button>

<button
  onClick={() => setSelectedCategory("tablets")}
  className={`w-full text-left hover:pl-2 transition ${selectedCategory === "tablets" ? "text-yellow-500 font-bold" : ""}`}
>
  Tablets
</button>

<button
  onClick={() => setSelectedCategory("tops")}
  className={`w-full text-left hover:pl-2 transition ${selectedCategory === "tops" ? "text-yellow-500 font-bold" : ""}`}
>
  Tops
</button>

<button
  onClick={() => setSelectedCategory("vehicle")}
  className={`w-full text-left hover:pl-2 transition ${selectedCategory === "vehicle" ? "text-yellow-500 font-bold" : ""}`}
>
  Vehicle
</button>

<button
  onClick={() => setSelectedCategory("womens-bags")}
  className={`w-full text-left hover:pl-2 transition ${selectedCategory === "womens-bags" ? "text-yellow-500 font-bold" : ""}`}
>
  Womens Bags
</button>

<button
  onClick={() => setSelectedCategory("womens-dresses")}
  className={`w-full text-left hover:pl-2 transition ${selectedCategory === "womens-dresses" ? "text-yellow-500 font-bold" : ""}`}
>
  Womens Dresses
</button>

<button
  onClick={() => setSelectedCategory("womens-jewellery")}
  className={`w-full text-left hover:pl-2 transition ${selectedCategory === "womens-jewellery" ? "text-yellow-500 font-bold" : ""}`}
>
  Womens Jewellery
</button>

<button
  onClick={() => setSelectedCategory("womens-shoes")}
  className={`w-full text-left hover:pl-2 transition ${selectedCategory === "womens-shoes" ? "text-yellow-500 font-bold" : ""}`}
>
  Womens Shoes
</button>

<button
  onClick={() => setSelectedCategory("womens-watches")}
  className={`w-full text-left hover:pl-2 transition ${selectedCategory === "womens-watches" ? "text-yellow-500 font-bold" : ""}`}
>
  Womens Watches
</button>


        <h3 className="mt-8 font-bold">Price</h3>

        <button onClick={() => setSelectedPrice(5)} className={`w-full text-left hover:pl-2 transition ${selectedPrice === 5 ? "text-yellow-500 font-bold" : ""}`}>Under $5</button>

        <button onClick={() => setSelectedPrice(10)} className={`w-full text-left hover:pl-2 transition ${selectedPrice === 10 ? "text-yellow-500 font-bold" : ""}`}>Under $10</button>

        <button onClick={() => setSelectedPrice(15)} className={`w-full text-left hover:pl-2 transition ${selectedPrice === 15 ? "text-yellow-500 font-bold" : ""}`}>Under $15</button>

        <button onClick={() => setSelectedPrice(20)} className={`w-full text-left hover:pl-2 transition ${selectedPrice === 20 ? "text-yellow-500 font-bold" : ""}`}>Under $20</button>

        <button onClick={() => setSelectedPrice(50)} className={`w-full text-left hover:pl-2 transition ${selectedPrice === 50 ? "text-yellow-500 font-bold" : ""}`}>Under $50</button>

        <button onClick={() => setSelectedPrice(100)} className={`w-full text-left hover:pl-2 transition ${selectedPrice === 100 ? "text-yellow-500 font-bold" : ""}`}>Under $100</button>

        <button onClick={() => setSelectedPrice(200)} className={`w-full text-left hover:pl-2 transition ${selectedPrice === 200 ? "text-yellow-500 font-bold" : ""}`}>Under $200</button>

        <button onClick={() => setSelectedPrice("all")} className={`w-full text-left hover:pl-2 transition ${selectedPrice === "all" ? "text-yellow-500 font-bold" : ""}`}>All Prices</button>

      </div>
    </div>
  );
}

export default Sidebar;