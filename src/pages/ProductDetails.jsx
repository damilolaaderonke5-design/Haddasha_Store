import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../services/api";
import { useCart } from "../context/CartContext";
import { useFavorites } from "../context/FavoritesContext";

export default function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { addToCart } = useCart();
  const { favorites, toggleFavorite } = useFavorites();

  const isFavorite = favorites.some(
    (item) => item.id === product?.id
  );

  useEffect(() => {
    let ignore = false;

    async function fetchProduct() {
      try {
        setLoading(true);
        setError("");

        const response = await api.get(`/products/${id}`);

        if (!ignore) {
          setProduct(response.data);
        }
      } catch (err) {
        console.error("Error fetching product details:", err);

        if (!ignore) {
          setError("Unable to load this product. Please try again.");
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }

    fetchProduct();

    return () => {
      ignore = true;
    };
  }, [id]);

  if (loading) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-green-600" />
          <p className="text-gray-500">Loading product details...</p>
        </div>
      </main>
    );
  }

  if (error || !product) {
    return (
      <main className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
        <h1 className="mb-3 text-2xl font-bold text-gray-900">
          Product Not Found
        </h1>

        <p className="mb-6 text-gray-500">
          {error || "We couldn't find this product."}
        </p>

        <Link
          to="/products"
          className="rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
        >
          Back to Products
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen px-6 py-12 md:px-12 lg:px-20">
      <Link
        to="/products"
        className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-green-600"
      >
        ← Back to Products
      </Link>

      <section className="grid gap-10 md:grid-cols-2 md:gap-14">

        {/* Product Image */}
        <div className="flex `min-h-[400px]` items-center justify-center rounded-2xl bg-gray-50 p-8 md:`min-h-[500px]`">
          <img
            src={product.image}
            alt={product.title}
            className="h-full `max-h-[420px]` w-full object-contain"
          />
        </div>

        {/* Product Information */}
        <div className="flex flex-col justify-center">
          <p className="mb-4 text-sm font-semibold capitalize tracking-wide text-green-600">
            {product.category}
          </p>

          <h1 className="mb-5 text-3xl leading-tight font-extrabold text-gray-900 md:text-4xl">
            {product.title}
          </h1>

          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="text-xl text-amber-500">★</span>

            <span className="font-semibold text-gray-800">
              {product.rating?.rate ?? "N/A"}
            </span>

            <span className="text-sm text-gray-500">
              ({product.rating?.count ?? 0} reviews)
            </span>
          </div>

          <p className="mb-6 text-3xl font-extrabold text-gray-900">
            ${Number(product.price).toFixed(2)}
          </p>

          <p className="mb-8 leading-8 text-gray-600">
            {product.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => addToCart(product)}
              className="flex-1 rounded-lg bg-green-600 px-6 py-4 font-semibold text-white transition hover:bg-green-700 active:scale-95"
            >
              Add to Cart
            </button>

            <button
              type="button"
              onClick={() => toggleFavorite(product)}
              className={`flex-1 rounded-lg border px-6 py-4 font-semibold transition ${
                isFavorite
                  ? "border-red-500 text-red-500"
                  : "border-gray-200 text-gray-800 hover:border-green-600 hover:text-green-600"
              }`}
            >
              {isFavorite ? "♥ Added to Favourites" : "♡ Add to Favourites"}
            </button>
          </div>

          <div className="mt-8 border-t border-gray-100 pt-6">
            <p className="text-sm text-gray-500">
              ✓ Product details and ratings provided by our demo API.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}