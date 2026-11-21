import { Link } from "react-router-dom";

export default function About() {
  const values = [
    {
      icon: "🛍️",
      title: "Quality Products",
      description:
        "We aim to make discovering useful, stylish, and quality products a simple and enjoyable experience.",
    },
    {
      icon: "💚",
      title: "Customer First",
      description:
        "We believe shopping should be convenient, enjoyable, and centered around the needs of our customers.",
    },
    {
      icon: "✨",
      title: "Everyday Convenience",
      description:
        "From fashion to electronics and home essentials, we bring different shopping categories together in one place.",
    },
  ];

  const categories = [
    {
      icon: "👕",
      name: "Fashion",
      description: "Discover styles for your everyday look.",
    },
    {
      icon: "🎧",
      name: "Electronics",
      description: "Explore gadgets and electronic essentials.",
    },
    {
      icon: "🏠",
      name: "Home & Living",
      description: "Find useful products for your living space.",
    },
    {
      icon: "⌚",
      name: "Accessories",
      description: "Complete your style with everyday accessories.",
    },
  ];

  return (
    <main className="bg-white text-gray-900 transition-colors duration-300 dark:bg-gray-950 dark:text-gray-100">

      {/* Hero Section */}
      <section className="bg-gray-50 px-6 py-20 transition-colors duration-300 dark:bg-gray-900 md:px-12 lg:px-20">

        <div className="mx-auto max-w-5xl text-center">

          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-green-600">
            About Hadassah Store
          </p>

          <h1 className="mb-6 text-4xl leading-tight font-extrabold tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            Shopping Made Simple,
            <span className="block text-green-600">
              Everyday.
            </span>
          </h1>

          <p className="mx-auto max-w-2xl text-base leading-8 text-gray-500 dark:text-gray-400 md:text-lg">
            Welcome to Hadassah Store, your everyday marketplace
            for fashion, electronics, home essentials, and
            accessories. We bring different shopping needs
            together to make discovering products easier.
          </p>

          <Link
            to="/products"
            className="mt-8 inline-block rounded-lg bg-green-600 px-8 py-3.5 font-semibold text-white shadow-md transition hover:bg-green-700"
          >
            Explore Our Products →
          </Link>

        </div>
      </section>

      {/* Our Story Section */}
      <section className="px-6 py-20 md:px-12 lg:px-20">

        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

          {/* Image */}
          <div className="relative">

            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1000&auto=format&fit=crop&q=80"
              alt="A modern shopping store"
              className="h-80 w-full rounded-2xl object-cover shadow-lg `md:h-[450px]`"
            />

            <div className="absolute -bottom-5 -right-3 rounded-xl bg-green-600 px-6 py-5 text-white shadow-lg sm:-right-5">
              <p className="text-2xl font-extrabold">
                Hadassah.
              </p>
              <p className="text-xs font-medium tracking-widest">
                YOUR EVERYDAY MARKETPLACE
              </p>
            </div>

          </div>

          {/* Story Content */}
          <div className="mt-6 md:mt-0">

            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-green-600">
              Who We Are
            </p>

            <h2 className="mb-6 text-3xl leading-tight font-extrabold text-gray-900 dark:text-white md:text-4xl">
              More Than Just a Shopping Destination
            </h2>

            <p className="mb-5 leading-8 text-gray-600 dark:text-gray-400">
              Hadassah Store is an online marketplace designed
              to bring everyday shopping categories together
              in one convenient place.
            </p>

            <p className="mb-5 leading-8 text-gray-600 dark:text-gray-400">
              We understand that finding the right products
              should not be complicated. That's why our store
              brings together fashion, electronics, home and
              living essentials, and accessories.
            </p>

            <p className="leading-8 text-gray-600 dark:text-gray-400">
              Our goal is to create a simple and enjoyable
              shopping experience where customers can explore,
              discover, and find products that suit their needs.
            </p>

          </div>

        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-green-600 px-6 py-20 text-center text-white md:px-12">

        <div className="mx-auto max-w-3xl">

          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-green-100">
            Our Mission
          </p>

          <h2 className="mb-6 text-3xl leading-tight font-extrabold md:text-4xl">
            Making Everyday Shopping Easier for Everyone.
          </h2>

          <p className="text-base leading-8 text-green-50 md:text-lg">
            We aim to bring convenience, variety, and simplicity
            into online shopping by making everyday products
            easier to discover in one marketplace.
          </p>

        </div>
      </section>

      {/* Our Values Section */}
      <section className="px-6 py-20 md:px-12 lg:px-20">

        <div className="mx-auto max-w-7xl">

          <div className="mb-12 text-center">

            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-green-600">
              What Matters to Us
            </p>

            <h2 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-4xl">
              Our Core Values
            </h2>

            <p className="mx-auto max-w-2xl leading-7 text-gray-500 dark:text-gray-400">
              The principles behind the shopping experience
              we want to create.
            </p>

          </div>

          <div className="grid gap-6 md:grid-cols-3">

            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
              >

                <div className="mb-5 text-5xl">
                  {value.icon}
                </div>

                <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                  {value.title}
                </h3>

                <p className="leading-7 text-gray-500 dark:text-gray-400">
                  {value.description}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-gray-50 px-6 py-20 dark:bg-gray-900 md:px-12 lg:px-20">

        <div className="mx-auto max-w-7xl">

          <div className="mb-12 text-center">

            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-green-600">
              Explore Our Store
            </p>

            <h2 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-4xl">
              Something for Everyone
            </h2>

            <p className="mx-auto max-w-2xl text-gray-500 dark:text-gray-400">
              Explore our different shopping categories and
              discover products for your everyday needs.
            </p>

          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {categories.map((category) => (
              <Link
                to="/products"
                key={category.name}
                className="rounded-xl border border-gray-100 bg-white p-7 text-center transition hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-950"
              >

                <span className="text-5xl">
                  {category.icon}
                </span>

                <h3 className="mb-2 mt-4 font-bold text-gray-900 dark:text-white">
                  {category.name}
                </h3>

                <p className="text-sm leading-6 text-gray-500 dark:text-gray-400">
                  {category.description}
                </p>

              </Link>
            ))}

          </div>

        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6 py-20 text-center md:px-12">

        <div className="mx-auto max-w-3xl">

          <h2 className="mb-5 text-3xl font-extrabold text-gray-900 dark:text-white md:text-4xl">
            Ready to Discover Something Great?
          </h2>

          <p className="mb-8 leading-7 text-gray-500 dark:text-gray-400">
            Explore Hadassah Store and find products that make
            everyday shopping more enjoyable.
          </p>

          <Link
            to="/products"
            className="inline-block rounded-lg bg-green-600 px-8 py-3.5 font-semibold text-white shadow-md transition hover:bg-green-700"
          >
            Start Shopping →
          </Link>

        </div>

      </section>

    </main>
  );
}