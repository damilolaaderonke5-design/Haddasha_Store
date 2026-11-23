import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";
import { useCart } from "../context/CartContext";
import { formatNaira } from "../utils/currency";

function ProductCard({ product }) {
  const { toggleFavorite, isFavorite } = useFavorites();
  const { addToCart } = useCart();

  if (!product) {
    return null;
  }

  const favorite = isFavorite(product.id);

  return (
    <article className="flex h-full `min-h-[480px]` flex-col overflow-hidden rounded-xl border border-gray-100 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Product Image */}
      <div className="relative">
        <Link to={`/products/${product.id}`} className="block">
          <div className="flex h-56 items-center justify-center bg-gray-50 p-6">
            <img
              src={product.image}
              alt={product.title}
              loading="lazy"
              className="h-full w-full object-contain transition duration-300 hover:scale-105"
            />
          </div>
        </Link>

        {/* Favourite Button */}
        <button
          type="button"
          onClick={() => toggleFavorite(product)}
          aria-label={
            favorite ? "Remove from favourites" : "Add to favourites"
          }
          aria-pressed={favorite}
          className={`absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-2xl shadow transition hover:scale-110 ${
            favorite
              ? "text-red-500"
              : "text-gray-400 hover:text-red-500"
          }`}
        >
          {favorite ? "♥" : "♡"}
        </button>
      </div>

      {/* Product Information */}
      <div className="flex flex-1 flex-col p-5">

        {/* Category */}
        <p className="mb-2 text-xs font-medium capitalize text-green-600">
          {product.category}
        </p>

        {/* Product Title */}
        <Link to={`/products/${product.id}`} className="block">
          <h3 className="mb-3 `min-h-[48px]` text-sm leading-6 font-semibold text-gray-800 hover:text-green-600">
            {product.title}
          </h3>
        </Link>

        {/* Product Rating */}
        <div className="mb-4 flex flex-wrap items-center gap-2 text-xs text-gray-500">
          <span className="text-base text-amber-500">★</span>

          <span className="font-semibold text-gray-700">
            {product.rating?.rate ?? "N/A"}
          </span>

          <span>
            ({product.rating?.count ?? 0} reviews)
          </span>
        </div>

        {/* Product Price */}
        <p className="mb-4 text-xl font-bold text-gray-900">
          {formatNaira(product.price)}
        </p>

        {/* Add to Cart */}
        <button
          type="button"
          onClick={() => addToCart(product)}
          className="mt-auto w-full rounded-lg bg-green-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-green-700 active:scale-95"
        >
          Add to Cart
        </button>

      </div>
    </article>
  );
}

export default ProductCard;