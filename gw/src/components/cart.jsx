import Navbar from "./navbar";
import { Link } from "react-router-dom";

function Cart({ cart, setCart }) {

  function removeOneFromCart(id) {
    let newCart = [];
    let removed = false;

    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === id && removed === false) {
        removed = true;
      } else {
        newCart.push(cart[i]);
      }
    }

    setCart(newCart);
  }

  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total = total + cart[i].price;
  }

  return (
    <div className="min-h-screen bg-gray-100 text-black">

      <Navbar cart={cart} wishlist={[]} />

      <div className="p-8">

        <h1 className="text-3xl font-bold mb-6">My Cart</h1>

        {cart.length === 0 ? (
          <p className="text-lg">Cart is empty.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cart.map((product, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-xl shadow-md"
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-40 object-cover rounded mb-3"
                />

                <h2 className="font-semibold mb-2">
                  {product.title}
                </h2>

                <p className="font-bold mb-3">
                  ${product.price}
                </p>

                <button
                  onClick={() => removeOneFromCart(product.id)}
                  className="bg-red-400 px-4 py-2 rounded hover:bg-red-500 transition text-white"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}

        {cart.length > 0 && (
          <div className="mt-8 text-xl font-bold">
            Total: ${total}
          </div>
        )}

        <div className="mt-8">
          <Link
            to="/"
            className="bg-yellow-400 px-6 py-3 rounded font-semibold hover:bg-yellow-500 transition"
          >
            Back to Products
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Cart;