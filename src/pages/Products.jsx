import { useState } from "react";
import useProducts from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";

export default function Products() {
const { products, loading, error } = useProducts();

const [search, setSearch] = useState("");
const [selectedCategory, setSelectedCategory] =
useState("all");

const categories = [
"all",
...new Set(products.map((product) => product.category)),
];

const filteredProducts = products.filter((product) => {
const matchesSearch = product.title
.toLowerCase()
.includes(search.toLowerCase());

const matchesCategory =
  selectedCategory === "all" ||
  product.category === selectedCategory;

return matchesSearch && matchesCategory;

});

if (loading) {
return (
<main className="flex min-h-[60vh] items-center justify-center">
  <div className="text-center">
  <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-green-600" />

    <p className="text-gray-500">
      Loading products...
    </p>
  </div>
</main>
);

}

if (error) {
return (
<main className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
<p className="mb-4 text-red-600">{error}</p>

    <button
        type="button"
      onClick={() => window.location.reload()}
      className="rounded-lg bg-green-600 px-5 py-3 font-semibold text-white hover:bg-green-700">
      Try Again
    </button>
  </main>
);

}

return (
<main className="min-h-screen px-6 py-12 md:px-12 lg:px-20">
{/* Page Heading */}
<section className="mb-10 text-center">
<p className="mb-3 text-xs font-bold tracking-[0.2em] text-green-600">
  OUR COLLECTION
</p>

    <h1 className="mb-4 text-3xl font-extrabold text-gray-900 md:text-5xl">
      Discover Our Products
    </h1>

    <p className="mx-auto max-w-xl leading-7 text-gray-500">
      Find the perfect products for your everyday needs.
      Explore our collection and discover something special.
    </p>
  </section>

  {/* Search and Category Filter */}
  <section className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
    <input
      type="search"
      placeholder="Search products..."
      value={search}
      onChange={(event) => setSearch(event.target.value)}
      aria-label="Search products"
      className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100 sm:max-w-md"
    />

    <select
      value={selectedCategory}
      onChange={(event) =>
        setSelectedCategory(event.target.value)
      }
      aria-label="Filter by category"
      className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 outline-none focus:border-green-600 sm:max-w-xs"
    >
      {categories.map((category) => (
        <option key={category} value={category}>
          {category === "all"
            ? "All Categories"
            : category}
        </option>
      ))}
    </select>
  </section>

  {/* Product Count */}
  <div className="mb-6 flex items-center justify-between">
    <p className="text-sm text-gray-500">
      Showing {filteredProducts.length} products
    </p>

    {(search || selectedCategory !== "all") && (
      <button
        type="button"
        onClick={() => {
          setSearch("");
          setSelectedCategory("all");
        }}
        className="text-sm font-semibold text-green-600 hover:text-green-700"
      >
        Clear Filters
      </button>
    )}
  </div>

  {/* Products Grid */}
  {filteredProducts.length === 0 ? (
    <div className="rounded-xl bg-gray-50 px-6 py-16 text-center">
      <p className="mb-2 text-lg font-semibold text-gray-800">
        No products found
      </p>

      <p className="text-gray-500">
        Try another search term or category.
      </p>
    </div>
  ) : (
    <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {filteredProducts.map((product) => (
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





