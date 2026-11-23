import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    console.log("Password reset request:", data);

    setSubmitted(true);
  }

  return (
    <main className="flex min-h-[75vh] items-center justify-center bg-gray-50 px-4 py-12 sm:px-6">
      <section className="w-full max-w-md rounded-2xl border border-gray-100 bg-white p-7 shadow-lg sm:p-10">

        {/* Logo */}
        <div className="mb-8 text-center">
          <Link
            to="/"
            className="text-3xl font-extrabold tracking-tight text-green-700"
          >
            Hadassah Store
          </Link>

          <h1 className="mt-7 text-2xl font-bold text-gray-900">
            Forgot your password?
          </h1>

          <p className="mt-3 text-sm leading-6 text-gray-500">
            Don't worry! Enter your email address below and we'll help you
            reset your password.
          </p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Email address
              </label>

              <input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                {...register("email", {
                  required: "Your email address is required.",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email address.",
                  },
                })}
                className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
              />

              {errors.email && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-lg bg-green-600 px-5 py-3.5 font-semibold text-white shadow-sm transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Sending..." : "Reset Password"}
            </button>
          </form>
        ) : (
          <div className="rounded-xl border border-green-100 bg-green-50 p-5 text-center">
            <div className="mb-3 text-3xl">✓</div>

            <h2 className="font-bold text-green-800">
              Request received!
            </h2>

            <p className="mt-2 text-sm leading-6 text-green-700">
              Your form was submitted successfully. Password reset emails
              will be enabled when authentication is connected.
            </p>
          </div>
        )}

        {/* Login Link */}
        <p className="mt-7 text-center text-sm text-gray-500">
          Remembered your password?{" "}
          <Link
            to="/login"
            className="font-semibold text-green-600 transition hover:text-green-700"
          >
            Log in
          </Link>
        </p>

        {/* Home Link */}
        <div className="mt-6 border-t border-gray-100 pt-5 text-center">
          <Link
            to="/"
            className="text-sm font-medium text-gray-500 transition hover:text-green-600"
          >
            ← Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}