import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useProducts from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";

const heroImages = [
  {
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&auto=format&fit=crop&q=80",
    alt: "Modern fashion retail store",
  },
  {
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&auto=format&fit=crop&q=80",
    alt: "Fashion shopping collection",
  },
  {
    image: "https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?w=1200&auto=format&fit=crop&q=80",
    alt: "Shopping and lifestyle products",
  },
  {
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&auto=format&fit=crop&q=80",
    alt: "Beautiful clothing store",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

// Automatically change images every 5 seconds
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentSlide((previous) =>
      (previous + 1) % heroImages.length
    );
  }, 5000);

  return () => clearInterval(interval);
}, []);

function nextSlide() {
  setCurrentSlide((previous) =>
    (previous + 1) % heroImages.length
  );
}

function previousSlide() {
  setCurrentSlide((previous) =>
    (previous - 1 + heroImages.length) % heroImages.length
  );
}
const { products, loading, error } = useProducts();

const [searchTerm, setSearchTerm] = useState("");
const [selectedCategory, setSelectedCategory] = useState("all");
const [sortBy, setSortBy] = useState("default");

const categories = [
  {
    name: "Men's Clothing",
    icon: "👔",
    slug: "men's clothing",
  },
  {
    name: "Women's Clothing",
    icon: "👗",
    slug: "women's clothing",
  },
  {
    name: "Electronics",
    icon: "🎧",
    slug: "electronics",
  },
  {
    name: "Jewelery",
    icon: "💍",
    slug: "jewelery",
  },
];

// Get available categories from the API
const productCategories = [
...new Set(products.map((product) => product.category)),
];

// Search and filter products
let filteredProducts = products.filter((product) => {
const matchesSearch = product.title
.toLowerCase()
.includes(searchTerm.toLowerCase());

const matchesCategory =
  selectedCategory === "all" ||
  product.category === selectedCategory;

return matchesSearch && matchesCategory;

});

// Sort products
if (sortBy === "low-high") {
filteredProducts.sort((a, b) => a.price - b.price);
} else if (sortBy === "high-low") {
filteredProducts.sort((a, b) => b.price - a.price);
} else if (sortBy === "rating") {
filteredProducts.sort(
(a, b) => b.rating.rate - a.rating.rate
);
}

// Display only the first 8 products
const featuredProducts = filteredProducts.slice(0, 8);

function clearFilters() {
setSearchTerm("");
setSelectedCategory("all");
setSortBy("default");
}

return (
<main>

  {/* Hero Section */}
  <section className="grid items-center gap-10 bg-gray-50 px-6 py-16 md:grid-cols-2 md:px-12 md:py-20 lg:px-20">

    <div>
      <p className="mb-5 text-xs font-bold tracking-[0.2em] text-green-600">
        YOUR EVERYDAY MARKETPLACE
      </p>

      <h1 className="mb-6 text-4xl leading-tight font-extrabold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
        Everything You Love,
        <br />
        All in One Place.
      </h1>

      <p className="mb-8 max-w-lg text-base leading-8 text-gray-500">
        Discover amazing products, explore new collections, and enjoy shopping made simple.
      </p>

      <Link
        to="/products"
        className="inline-block rounded-lg bg-green-600 px-7 py-3.5 font-semibold text-white transition hover:bg-green-700"
      >
        Shop Now →
      </Link>
    </div>

    {/* Hero Image Carousel */}
<div className="group relative h-72 overflow-hidden rounded-2xl shadow-lg sm:h-96">

  {/* Carousel Images */}
  {heroImages.map((item, index) => (
    <img
      key={index}
      src={item.image}
      alt={item.alt}
      className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
        currentSlide === index
          ? "opacity-100"
          : "opacity-0"
      }`}
    />
  ))}

  {/* Previous Button */}
  <button
    type="button"
    onClick={previousSlide}
    aria-label="Previous image"
    className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-2xl text-gray-800 opacity-100 shadow transition hover:bg-green-600 hover:text-white sm:opacity-0 sm:group-hover:opacity-100"
  >
    ‹
  </button>

  {/* Next Button */}
  <button
    type="button"
    onClick={nextSlide}
    aria-label="Next image"
    className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-2xl text-gray-800 opacity-100 shadow transition hover:bg-green-600 hover:text-white sm:opacity-0 sm:group-hover:opacity-100"
  >
    ›
  </button>

  {/* Carousel Indicators */}
  <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
    {heroImages.map((_, index) => (
      <button
        key={index}
        type="button"
        onClick={() => setCurrentSlide(index)}
        aria-label={`Go to image ${index + 1}`}
        className={`h-2.5 rounded-full transition-all duration-300 ${
          currentSlide === index
            ? "w-8 bg-green-600"
            : "w-2.5 bg-white/80"
        }`}
      />
    ))}
  </div>

</div>
  </section>

  {/* Categories Section */}
  <section className="px-6 py-16 md:px-12 lg:px-20">

    <div className="mb-8">
      <h2 className="mb-3 text-3xl font-bold text-gray-900">
        Shop by Category
      </h2>

      <p className="text-gray-500">
        Find something you'll love.
      </p>
    </div>

    <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
      {categories.map((category) => (
          <Link
            to={`/products?category=${encodeURIComponent(category.slug)}`}
            key={category.slug}
          className="rounded-xl border border-gray-100 p-6 text-center transition hover:-translate-y-1 hover:shadow-lg md:p-8"
        >
          <span className="text-4xl">{category.icon}</span>

          <h3 className="mt-4 font-semibold text-gray-800">
            {category.name}
          </h3>
        </Link>
      ))}
    </div>
  </section>

  {/* Featured Products Section */}
  <section className="bg-gray-50 px-6 py-16 md:px-12 lg:px-20">

    <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
      <div>
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-green-600">
          Our Collection
        </p>

        <h2 className="text-3xl font-bold text-gray-900">
          Explore Our Products
        </h2>

        <p className="mt-2 text-gray-500">
          Find the perfect products for your everyday needs.
        </p>
      </div>

      <Link
        to="/products"
        className="font-semibold text-green-600 transition hover:text-green-700"
      >
        View All Products →
      </Link>
    </div>

    {/* Search and Filter */}
    <div className="mb-8 grid grid-cols-1 gap-4 rounded-xl bg-white p-5 shadow-sm md:grid-cols-3">

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search for products..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-500/20 md:col-span-1"
      />

      {/* Category Filter */}
      <select
        value={selectedCategory}
        onChange={(event) => setSelectedCategory(event.target.value)}
        className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-green-500"
      >
        <option value="all">All Categories</option>

        {productCategories.map((category) => (
          <option key={category} value={category}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </option>
        ))}
      </select>

      {/* Sorting */}
      <select
        value={sortBy}
        onChange={(event) => setSortBy(event.target.value)}
        className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-green-500"
      >
        <option value="default">Sort By: Default</option>
        <option value="low-high">Price: Low to High</option>
        <option value="high-low">Price: High to Low</option>
        <option value="rating">Highest Rated</option>
      </select>

    </div>

    {/* Product Count and Clear Filters */}
    <div className="mb-6 flex items-center justify-between">
      <p className="text-sm text-gray-500">
        Showing {featuredProducts.length} of {filteredProducts.length} matching products
      </p>

      {(searchTerm || selectedCategory !== "all" || sortBy !== "default") && (
        <button
          onClick={clearFilters}
          className="text-sm font-semibold text-red-500 hover:text-red-700"
        >
          Clear Filters
        </button>
      )}
    </div>

    {/* Loading State */}
    {loading && (
      <p className="py-16 text-center text-gray-500">
        Loading products...
      </p>
    )}

    {/* Error State */}
    {error && !loading && (
      <div className="py-16 text-center">
        <p className="mb-4 text-red-500">
          Unable to load products. Please try again.
        </p>

        <button
          onClick={() => window.location.reload()}
          className="rounded-lg bg-green-600 px-5 py-2 text-white hover:bg-green-700"
        >
          Try Again
        </button>
      </div>
    )}

    {/* Product Grid */}
    {!loading && !error && featuredProducts.length > 0 && (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    )}

    {/* No Products Found */}
    {!loading && !error && filteredProducts.length === 0 && (
      <div className="py-16 text-center">
        <p className="mb-3 text-4xl">🔍</p>

        <h3 className="text-xl font-bold text-gray-800">
          No products found
        </h3>

        <p className="mt-2 text-gray-500">
          Try another search or change your category.
        </p>

        <button
          onClick={clearFilters}
          className="mt-5 rounded-lg bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
        >
          Clear Filters
        </button>
      </div>
    )}

  </section>

</main>

);
}