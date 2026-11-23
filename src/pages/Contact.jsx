import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";

export default function Contact() {
  const [successMessage, setSuccessMessage] = useState("");
  const [searchParams] = useSearchParams();

  // Help Center displays only the support section
  const supportOnly = searchParams.get("view") === "support";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  function onSubmit(data) {
    console.log("Contact Form Data:", data);

    setSuccessMessage(
      "Thank you for contacting Hadassah Store! Your message has been submitted successfully. Message delivery will be enabled when a contact service is connected."
    );

    reset();
  }

  return (
    <div className="bg-white">

      {/* Hero Section */}
      {!supportOnly && (
        <section className="bg-green-50 px-6 py-20 text-center">
          <p className="mb-3 font-semibold uppercase tracking-widest text-green-700">
            Get in Touch
          </p>

          <h1 className="mb-5 text-4xl font-bold text-gray-900 md:text-5xl">
            We'd Love to Hear From You
          </h1>

          <p className="mx-auto max-w-2xl leading-7 text-gray-600">
            Have a question, suggestion, or need assistance with your order?
            We're always happy to hear from you.
          </p>
        </section>
      )}

      {/* Contact Section */}
      <section
        className={`mx-auto grid max-w-7xl gap-12 px-6 py-16 ${
          supportOnly ? "grid-cols-1" : "lg:grid-cols-2"
        }`}
      >

        {/* Contact Information */}
        <div>
          <p className="mb-3 font-semibold uppercase tracking-widest text-green-600">
            {supportOnly ? "Hadassah Store Support" : "Contact Us"}
          </p>

          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            Let's Talk
          </h2>

          <p className="mb-10 max-w-xl leading-7 text-gray-600">
            Whether you need help finding a product, tracking an order,
            or simply want to share feedback, we're happy to hear from you.
            Explore the support information below.
          </p>

          <div className="grid gap-6 sm:grid-cols-2">

            {/* Email */}
            <div className="flex items-start gap-4 rounded-xl border border-gray-200 p-5 transition hover:border-green-300 hover:shadow-md">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-green-100 text-2xl">
                ✉️
              </div>

              <div>
                <h3 className="mb-2 font-semibold text-gray-900">
                  Email Support
                </h3>

                <p className="text-sm leading-6 text-gray-600">
                  Contact us by email for questions and enquiries.
                </p>

                <p className="mt-2 text-xs text-gray-400">
                  Support email address to be added.
                </p>
              </div>
            </div>

            {/* Customer Support */}
            <div className="flex items-start gap-4 rounded-xl border border-gray-200 p-5 transition hover:border-green-300 hover:shadow-md">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-green-100 text-2xl">
                💬
              </div>

              <div>
                <h3 className="mb-2 font-semibold text-gray-900">
                  Customer Support
                </h3>

                <p className="text-sm leading-6 text-gray-600">
                  We're here to help make your shopping experience better.
                </p>

                <p className="mt-2 text-xs text-gray-400">
                  Support contact details to be added.
                </p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="flex items-start gap-4 rounded-xl border border-gray-200 p-5 transition hover:border-green-300 hover:shadow-md sm:col-span-2">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-green-100 text-2xl">
                🕒
              </div>

              <div>
                <h3 className="mb-2 font-semibold text-gray-900">
                  Business Hours
                </h3>

                <p className="text-sm leading-6 text-gray-600">
                  Customer support hours will be announced soon.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Contact Form */}
        {!supportOnly && (
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg md:p-8">

            <h2 className="mb-2 text-2xl font-bold text-gray-900">
              Send Us a Message
            </h2>

            <p className="mb-8 text-sm leading-6 text-gray-500">
              Fill in the form below and let us know how we can help.
            </p>

            {successMessage && (
              <div
                role="status"
                className="mb-6 rounded-lg border border-green-200 bg-green-50 p-4 text-sm leading-6 text-green-700"
              >
                {successMessage}
              </div>
            )}

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5"
            >

              {/* Full Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Enter your full name"
                  {...register("name", {
                    required: "Please enter your name.",
                    minLength: {
                      value: 2,
                      message: "Your name must contain at least 2 characters.",
                    },
                  })}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                />

                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Enter your email address"
                  {...register("email", {
                    required: "Please enter your email.",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter a valid email address.",
                    },
                  })}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                />

                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  type="text"
                  placeholder="What is your message about?"
                  {...register("subject", {
                    required: "Please enter a subject.",
                  })}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                />

                {errors.subject && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Your Message
                </label>

                <textarea
                  id="message"
                  rows="5"
                  placeholder="Write your message here..."
                  {...register("message", {
                    required: "Please enter your message.",
                    minLength: {
                      value: 10,
                      message: "Your message must be at least 10 characters.",
                    },
                  })}
                  className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                />

                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-lg bg-green-600 px-6 py-3.5 font-semibold text-white shadow-sm transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

            </form>
          </div>
        )}

      </section>
    </div>
  );
}