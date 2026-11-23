import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    console.log("Login form data:", data);

    alert(
      "Form validation successful! Real login will be connected to an authentication service later."
    );
  }

  return (
    <main className="flex min-h-[75vh] items-center justify-center bg-gray-50 px-4 py-12 sm:px-6">
      <section className="w-full max-w-md rounded-2xl border border-gray-100 bg-white p-7 shadow-lg sm:p-10">

        {/* Logo and Heading */}
        <div className="mb-8 text-center">
          <Link
            to="/"
            className="text-3xl font-extrabold tracking-tight text-green-700"
          >
            Hadassah Store
          </Link>

          <h1 className="mt-7 text-2xl font-bold text-gray-900">
            Welcome back!
          </h1>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            Log in to your account and continue shopping.
          </p>
        </div>

        {/* Login Form */}
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

          {/* Password */}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-700"
              >
                Password
              </label>

              <Link
                to="/forgot-password"
                className="text-sm font-semibold text-green-600 transition hover:text-green-700"
              >
                Forgot password?
              </Link>
            </div>

            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                placeholder="Enter your password"
                {...register("password", {
                  required: "Your password is required.",
                })}
                className="w-full rounded-lg border border-gray-200 px-4 py-3 pr-20 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-green-600"
              >
                {showPassword ? (
                  // Eye-off icon
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.8}
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 3l18 18M10.6 10.6a2 2 0 002.8 2.8M9.9 5.2A10.5 10.5 0 0112 5c5 0 8.5 4.5 9.5 7-.4 1-1.3 2.2-2.6 3.3M6.2 6.2C3.8 7.7 2.5 10 2.5 12c1 2.5 4.5 7 9.5 7 1 0 2-.2 2.9-.5"
                    />
                  </svg>
                ) : (
                  // Eye icon
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.8}
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.5 12s3.5-7 9.5-7 9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7z"
                    />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </button>
            </div>

            {errors.password && (
              <p className="mt-2 text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-lg bg-green-600 px-5 py-3.5 font-semibold text-white shadow-sm transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Logging in..." : "Log In"}
          </button>
        </form>

        {/* Register Link */}
        <p className="mt-7 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-semibold text-green-600 transition hover:text-green-700"
          >
            Create an account
          </Link>
        </p>

        {/* Back to Home */}
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