import { Link } from "react-router-dom";

export default function Shipping() {
  return (
    <main className="min-h-[60vh] bg-gray-50 px-6 py-16">
      <section className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-sm md:p-12">

        <p className="mb-3 font-semibold uppercase tracking-widest text-green-600">
          Customer Support
        </p>

        <h1 className="mb-6 text-3xl font-bold text-gray-900">
          Shipping Information
        </h1>

        <p className="mb-6 leading-7 text-gray-600">
          At Hadassah Store, we want your shopping experience to be simple
          and convenient.
        </p>

        <div className="space-y-5">
          <div>
            <h2 className="mb-2 font-semibold text-gray-900">
              Delivery Locations
            </h2>

            <p className="leading-7 text-gray-600">
              Delivery locations and availability will be announced when
              our shipping service is officially launched.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-semibold text-gray-900">
              Delivery Time
            </h2>

            <p className="leading-7 text-gray-600">
              Estimated delivery times will depend on your location and
              the shipping service selected.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-semibold text-gray-900">
              Shipping Fees
            </h2>

            <p className="leading-7 text-gray-600">
              Shipping fees will be communicated before an order is
              confirmed.
            </p>
          </div>
        </div>

        <Link
          to="/contact?view=support"
          className="mt-8 inline-block rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
        >
          Contact Support
        </Link>

      </section>
    </main>
  );
}