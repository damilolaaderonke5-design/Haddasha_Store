import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Contact() {
  const [successMessage, setSuccessMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  function onSubmit(data) {
    console.log("Contact Form Data:", data);

    setSuccessMessage(
      "Thank you for contacting Hadassah Store! We have received your message."
    );

    reset();
  }

  return (
    <div className="bg-white">

      {/* Hero Section */}
      <section className="bg-blue-50 px-6 py-20 text-center">
        <p className="mb-3 font-semibold uppercase tracking-widest text-blue-600">
          Get in Touch
        </p>

        <h1 className="mb-5 text-4xl font-bold text-gray-900 md:text-5xl">
          We'd Love to Hear From You
        </h1>

        <p className="mx-auto max-w-2xl text-gray-600">
          Have a question, suggestion, or need assistance with your order?
          We're always happy to hear from you.
        </p>
      </section>

      {/* Contact Section */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-2">

        {/* Contact Information */}
        <div>
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            Let's Talk
          </h2>

          <p className="mb-10 leading-7 text-gray-600">
            Whether you need help finding a product, tracking an order,
            or simply want to share feedback, feel free to send us a message.
          </p>

          <div className="space-y-6">

            {/* Email */}
            <div className="flex items-start gap-4 rounded-xl border border-gray-200 p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-2xl">
                ✉️
              </div>

              <div>
                <h3 className="mb-1 font-semibold text-gray-900">
                  Email Us
                </h3>

                <p className="text-sm text-gray-600">
                  Send us your questions and enquiries.
                </p>
              </div>
            </div>

            {/* Customer Support */}
            <div className="flex items-start gap-4 rounded-xl border border-gray-200 p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-2xl">
                💬
              </div>

              <div>
                <h3 className="mb-1 font-semibold text-gray-900">
                  Customer Support
                </h3>

                <p className="text-sm text-gray-600">
                  We're here to help make your shopping experience better.
                </p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="flex items-start gap-4 rounded-xl border border-gray-200 p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-2xl">
                🕒
              </div>

              <div>
                <h3 className="mb-1 font-semibold text-gray-900">
                  Business Hours
                </h3>

                <p className="text-sm text-gray-600">
                  Monday – Friday
                </p>

                <p className="text-sm text-gray-600">
                  9:00 AM – 5:00 PM
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Contact Form */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg md:p-8">

          <h2 className="mb-2 text-2xl font-bold text-gray-900">
            Send Us a Message
          </h2>

          <p className="mb-8 text-sm text-gray-500">
            Fill in the form below and let us know how we can help.
          </p>

          {successMessage && (
            <div className="mb-6 rounded-lg bg-green-100 p-4 text-sm text-green-700">
              {successMessage}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

            {/* Full Name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your full name"
                {...register("name", {
                  required: "Please enter your name",
                })}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />

              {errors.name && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email address"
                {...register("email", {
                  required: "Please enter your email",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Please enter a valid email address",
                  },
                })}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />

              {errors.email && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Subject */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Subject
              </label>

              <input
                type="text"
                placeholder="What is your message about?"
                {...register("subject", {
                  required: "Please enter a subject",
                })}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />

              {errors.subject && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.subject.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Your Message
              </label>

              <textarea
                rows="5"
                placeholder="Write your message here..."
                {...register("message", {
                  required: "Please enter your message",
                  minLength: {
                    value: 10,
                    message: "Your message must be at least 10 characters",
                  },
                })}
                className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
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
              className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

          </form>
        </div>

      </section>
    </div>
  );
}