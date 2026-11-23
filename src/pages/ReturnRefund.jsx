import { Link } from "react-router-dom";

export default function ReturnRefund() {
  return (
    <main className="min-h-[60vh] bg-gray-50 px-6 py-16">
      <section className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-sm md:p-12">

        <p className="mb-3 font-semibold uppercase tracking-widest text-green-600">
          Customer Support
        </p>

        <h1 className="mb-6 text-3xl font-bold text-gray-900">
          Returns & Refunds
        </h1>

        <p className="mb-6 leading-7 text-gray-600">
          We want you to feel confident when shopping with Hadassah Store.
          Information about our return and refund process will be published
          before customer orders are officially accepted.
        </p>

        <div className="space-y-5">
          <div>
            <h2 className="mb-2 font-semibold text-gray-900">
              Return Eligibility
            </h2>

            <p className="leading-7 text-gray-600">
              Return conditions and eligible products will be clearly
              communicated when our return policy is established.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-semibold text-gray-900">
              Refund Process
            </h2>

            <p className="leading-7 text-gray-600">
              Refund methods and processing timelines will be published
              before purchases are enabled.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-semibold text-gray-900">
              Need Assistance?
            </h2>

            <p className="leading-7 text-gray-600">
              Please visit our Help Center if you have questions.
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