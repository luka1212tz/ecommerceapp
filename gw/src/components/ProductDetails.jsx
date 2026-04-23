import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./navbar";

function ProductDetails({ wishlist, setWishlist, cart, setCart}) {
  let { id } = useParams();
  let [product, setProduct] = useState(null);
  let [dark, setDark] = useState(false);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) {
    return (
      <div >
        
      </div>
    );
  }

    function addToWishlist(product) {
  let newWishlist = [...wishlist];
  newWishlist.push(product);
  setWishlist(newWishlist);
}

  function addToCart(product) {
    let newCart = [...cart];
    newCart.push(product);
    setCart(newCart);
  }
  

  return (
    <div className={
        dark
          ? "bg-[#1F1F1F] text-white min-h-screen"
          : "bg-gray-100 text-black min-h-screen"
      }>
      <Navbar
  cart={cart}
 
  wishlist={wishlist}
/>


          <button
          onClick={() => setDark(!dark)}
          className="bg-yellow-400 px-4 py-2 rounded hover:bg-yellow-500 transition m-5"
        >
          Toggle Dark Mode
        </button>

      <div className="py-12 px-6">
        <div
  className={`max-w-6xl mx-auto rounded-2xl p-8 shadow-lg transition
  ${dark ? "bg-[#2A2A2A] text-gray-200 shadow-black/40" : "bg-white text-gray-800"}`}
>

          <div className="grid md:grid-cols-2 gap-10">

            <div className="flex justify-center items-center">
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-full max-w-md rounded-xl shadow-md"
              />
            </div>

            <div>
              <h1 className="text-3xl font-bold mb-2">{product.title}</h1>

             <p className={dark ? "text-gray-400 mb-2" : "text-gray-500 mb-2"}></p>

              <div className="flex items-center gap-2 mb-4">
                
                <span className="text-gray-600 text-sm">
                    <p>product rating</p>
                  ({product.rating})
                </span>
              </div>

              <div className="mb-4">
               
                <span className=" text-gray-400">
                  ${product.price}
                </span>
                <span className="ml-3 bg-red-100 text-red-600 px-2 py-1 rounded text-sm">
                  -{product.discountPercentage}%
                </span>
              </div>

              <p className="mb-4">
                {product.stock > 0 ? (
                  <span className="text-green-600 font-semibold">
                    In Stock ({product.stock})
                  </span>
                ) : (
                  <span className="text-red-600 font-semibold">
                    Out of Stock
                  </span>
                )}
              </p>

              <p className={dark ? "text-gray-300 mb-6 leading-relaxed" : "text-gray-700 mb-6 leading-relaxed"}>
                {product.description}
              </p>

              <div className="flex gap-4">
                <button className="bg-yellow-400 hover:bg-yellow-500 px-6 py-3 rounded-xl font-semibold transition shadow-md" onClick={() => addToCart(product)}>
                  Add to Cart
                </button>

                <button
                 onClick={() => addToWishlist(product)}
                className='px-6 py-3 rounded-xl font-semibold transition border '>Add to Wishlist</button>
              </div>

                


              <div className="mt-8 border-t pt-6 text-sm text-gray-600 space-y-2">
                
                <p>Weight: {product.weight}g</p>
                <p>{product.shippingInformation}</p>
                <p>Return Policy: {product.returnPolicy}</p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>

            <div className="space-y-6">
              {product.reviews.map((review, index) => (
                <div
                  key={index}
                  className={`rounded-xl p-4 shadow-sm border transition
                    ${dark 
                      ? "bg-[#333333] border-gray-700 text-gray-200" 
                      : "bg-gray-50 border-gray-200 text-gray-800"
                    }`}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">
                      {review.reviewerName}
                    </span>
                    <span className="text-yellow-500">
                      {"⭐".repeat(review.rating)}
                    </span>
                  </div>

                  <p className="text-gray-700">{review.comment}</p>

                  <p className="text-xs text-gray-400 mt-2">
                    {new Date(review.date).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ProductDetails;