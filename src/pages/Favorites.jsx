import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useFavorites } from "../context/FavoritesContext";

export default function Favorites() {
  const { favorites } = useFavorites();

  return (
    <main className="min-h-screen bg-white px-6 py-12 md:px-12 lg:px-20">

      {/* Page Heading */}
      <section className="mb-10">
        <p className="mb-3 text-xs font-bold tracking-[0.2em] text-green-600">
          YOUR COLLECTION
        </p>

        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 md:text-5xl">
          My Favourites ❤️
        </h1>

        <p className="text-gray-500">
          Your favourite products are saved here. Keep the things you love
          close and find them whenever you need them.
        </p>
      </section>

      {favorites.length === 0 ? (

        /* Empty Favourites */
        <section className="rounded-2xl bg-gray-50 px-6 py-16 text-center">

          <div className="mb-5 text-6xl">
            ♡
          </div>

          <h2 className="mb-3 text-xl font-bold text-gray-900">
            No favourites yet
          </h2>

          <p className="mb-6 text-gray-500">
            You haven't added any favourite products yet.
            Explore our collection and save the products you love.
          </p>

          <Link
            to="/products"
            className="inline-block rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
          >
            Browse Products
          </Link>

        </section>

      ) : (

        /* Favourite Products */
        <>
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm font-medium text-gray-500">
              {favorites.length} saved {favorites.length === 1 ? "product" : "products"}
            </p>

            <Link
              to="/products"
              className="text-sm font-semibold text-green-600 transition hover:text-green-700"
            >
              Continue Shopping →
            </Link>
          </div>

          <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {favorites.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </section>
        </>

      )}

    </main>
  );
}