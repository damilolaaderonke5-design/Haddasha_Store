import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useFavorites } from "../context/FavoritesContext";

export default function Favorites() {
const { favorites } = useFavorites();

return (
<main className="min-h-screen bg-white px-6 py-12 md:px-12 lg:px-20">
<h1 className="mb-4 text-3xl font-bold text-gray-900">
  My Favourites ❤️
</h1>

  <p className="mb-8 text-gray-500">
    Your favourite products are saved here.
  </p>

  {favorites.length === 0 ? (
    <div className="rounded-xl bg-gray-50 px-6 py-12 text-center">
      <p className="mb-5 text-lg text-gray-700">
        You haven't added any favourites yet.
      </p>

      <Link
        to="/products"
        className="inline-block rounded-lg bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700">Browse Products
      </Link>
    </div>
  ) : (
    <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {favorites.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </section>
  )}
</main>

);
}



