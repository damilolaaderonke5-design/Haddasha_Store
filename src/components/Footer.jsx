import { Link } from "react-router-dom";

export default function Footer() {
  function handleNewsletterSubmit(event) {
    event.preventDefault();

    alert(
      "Thank you for your interest! Newsletter subscriptions will be connected later."
    );

    event.currentTarget.reset();
  }

  return (
    <footer className="mt-16 bg-gray-950 text-gray-300">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">

        {/* Store Information */}
        <div>
          <Link to="/" className="text-3xl font-extrabold text-white">
            Hadassah Store
          </Link>

          <p className="mt-5 max-w-xs text-sm leading-7 text-gray-400">
            Your everyday marketplace for fashion, electronics, home
            essentials, and accessories. Discover more and enjoy shopping
            made simple.
          </p>

          {/* Social Links */}
          <div className="mt-6 flex gap-3">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 font-bold text-white transition hover:bg-green-600"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 font-bold text-white transition hover:bg-green-600"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>

            <a
              href="https://x.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="X"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 font-bold text-white transition hover:bg-green-600"
            >
              <i className="fa-brands fa-x-twitter"></i>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-5 text-lg font-bold text-white">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/" className="transition hover:text-green-400">
                Home
              </Link>
            </li>

            <li>
              <Link to="/products" className="transition hover:text-green-400">
                Shop Products
              </Link>
            </li>

            <li>
              <Link to="/about" className="transition hover:text-green-400">
                About Us
              </Link>
            </li>

            <li>
              <Link to="/contact" className="transition hover:text-green-400">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="mb-5 text-lg font-bold text-white">
            Customer Support
          </h3>

          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/contact" className="transition hover:text-green-400">
                Help Center
              </Link>
            </li>

            <li>
              <Link to="/contact" className="transition hover:text-green-400">
                Shipping Information
              </Link>
            </li>

            <li>
              <Link to="/contact" className="transition hover:text-green-400">
                Returns & Refunds
              </Link>
            </li>

            <li>
              <Link to="/contact" className="transition hover:text-green-400">
                Customer Enquiries
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="mb-5 text-lg font-bold text-white">
            Stay in the Loop
          </h3>

          <p className="mb-5 text-sm leading-6 text-gray-400">
            Subscribe to receive updates about new products, special offers,
            and more.
          </p>

          <form onSubmit={handleNewsletterSubmit} className="space-y-3">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>

            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="Enter your email"
              className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
            />

            <button
              type="submit"
              className="w-full rounded-lg bg-green-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-green-700 active:scale-95"
            >
              Subscribe →
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-center text-xs text-gray-500 sm:flex-row lg:px-10">
          <p>
            © {new Date().getFullYear()} Hadassah Store. All rights reserved.
          </p>

          <p>Made with care for a better shopping experience.</p>
        </div>
      </div>
    </footer>
  );
}