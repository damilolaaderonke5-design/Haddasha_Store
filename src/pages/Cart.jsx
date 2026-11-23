import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { formatNaira } from "../utils/currency";

export default function Cart() {
  const {
    cart,
    cartCount,
    cartTotal,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  return (
    <main className="min-h-screen bg-white px-6 py-12 md:px-12 lg:px-20">

      {/* Page Heading */}
      <section className="mb-10">
        <p className="mb-3 text-xs font-bold tracking-[0.2em] text-green-600">
          YOUR SHOPPING BAG
        </p>

        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 md:text-5xl">
          Shopping Cart
        </h1>

        <p className="text-gray-500">
          Review your selected products before checkout.
        </p>
      </section>

      {cart.length === 0 ? (

        /* Empty Cart */
        <section className="rounded-2xl bg-gray-50 px-6 py-16 text-center">
          <div className="mb-5 text-6xl">🛒</div>

          <h2 className="mb-3 text-xl font-bold text-gray-900">
            Your cart is empty
          </h2>

          <p className="mb-6 text-gray-500">
            You haven't added any products to your cart yet.
          </p>

          <Link
            to="/products"
            className="inline-block rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
          >
            Start Shopping
          </Link>
        </section>

      ) : (

        <div className="grid items-start gap-10 lg:grid-cols-3">

          {/* Cart Products */}
          <section className="space-y-5 lg:col-span-2">

            <div className="flex flex-wrap items-center justify-between gap-4">
              <h2 className="text-xl font-bold text-gray-900">
                Your Items ({cartCount})
              </h2>

              <button
                type="button"
                onClick={clearCart}
                className="text-sm font-semibold text-red-500 transition hover:text-red-700"
              >
                Clear Cart
              </button>
            </div>

            {cart.map((item) => (

              <article
                key={item.id}
                className="flex flex-col gap-5 rounded-xl border border-gray-100 p-5 sm:flex-row"
              >

                {/* Product Image */}
                <Link
                  to={`/products/${item.id}`}
                  className="flex h-36 w-full shrink-0 items-center justify-center rounded-lg bg-gray-50 p-4 sm:w-36"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-contain"
                  />
                </Link>

                {/* Product Information */}
                <div className="flex flex-1 flex-col justify-between gap-4">

                  <div>
                    <p className="mb-2 text-xs font-medium capitalize text-green-600">
                      {item.category}
                    </p>

                    <Link
                      to={`/products/${item.id}`}
                      className="font-semibold text-gray-900 transition hover:text-green-600"
                    >
                      {item.title}
                    </Link>

                    <p className="mt-2 text-lg font-bold text-gray-900">
                      {formatNaira(item.price)}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4">

                    {/* Quantity Controls */}
                    <div className="flex items-center rounded-lg border border-gray-200">
                      <button
                        type="button"
                        onClick={() => decreaseQuantity(item.id)}
                        aria-label={`Decrease quantity of ${item.title}`}
                        className="px-4 py-2 text-lg transition hover:bg-gray-100"
                      >
                        −
                      </button>

                      <span className="min-w-10 text-center text-sm font-semibold">
                        {item.quantity}
                      </span>

                      <button
                        type="button"
                        onClick={() => increaseQuantity(item.id)}
                        aria-label={`Increase quantity of ${item.title}`}
                        className="px-4 py-2 text-lg transition hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>

                    {/* Remove Product */}
                    <button
                      type="button"
                      onClick={() => removeFromCart(item.id)}
                      className="text-sm font-medium text-red-500 transition hover:text-red-700"
                    >
                      Remove
                    </button>

                  </div>
                </div>

                {/* Item Subtotal */}
                <div className="text-left sm:text-right">
                  <p className="text-xs text-gray-500">
                    Subtotal
                  </p>

                  <p className="mt-1 font-bold text-gray-900">
                    {formatNaira(item.price * item.quantity)}
                  </p>
                </div>

              </article>
            ))}

          </section>

          {/* Order Summary */}
          <aside className="rounded-2xl border border-gray-100 bg-gray-50 p-6 lg:sticky lg:top-6">

            <h2 className="mb-6 text-xl font-bold text-gray-900">
              Order Summary
            </h2>

            <div className="mb-4 flex justify-between text-sm text-gray-600">
              <span>Items ({cartCount})</span>

              <span>{formatNaira(cartTotal)}</span>
            </div>

            <div className="mb-4 flex justify-between text-sm text-gray-600">
              <span>Shipping</span>

              <span className="font-medium text-green-600">
                Calculated at checkout
              </span>
            </div>

            <div className="mb-6 border-t border-gray-200 pt-5">
              <div className="flex items-center justify-between gap-4">

                <span className="font-bold text-gray-900">
                  Subtotal
                </span>

                <span className="text-2xl font-extrabold text-gray-900">
                  {formatNaira(cartTotal)}
                </span>

              </div>
            </div>

            <button
              type="button"
              onClick={() =>
                alert("We'll build the checkout page in a later stage!")
              }
              className="w-full rounded-lg bg-green-600 px-5 py-4 font-semibold text-white transition hover:bg-green-700 active:scale-95"
            >
              Proceed to Checkout →
            </button>

            <Link
              to="/products"
              className="mt-4 block text-center text-sm font-semibold text-gray-500 transition hover:text-green-600"
            >
              Continue Shopping
            </Link>

          </aside>

        </div>
      )}

    </main>
  );
}