import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const password = watch("password");

  async function onSubmit(data) {
    console.log("Registration form data:", data);

    alert(
      "Form validation successful! Real account registration will be connected to an authentication service later."
    );
  }

  return (
    <main className="flex min-h-[75vh] items-center justify-center bg-gray-50 px-4 py-12 sm:px-6">
      <section className="w-full max-w-lg rounded-2xl border border-gray-100 bg-white p-7 shadow-lg sm:p-10">

        {/* Logo and Heading */}
        <div className="mb-8 text-center">
          <Link
            to="/"
            className="text-3xl font-extrabold tracking-tight text-green-700"
          >
            Hadassah Store
          </Link>

          <h1 className="mt-7 text-2xl font-bold text-gray-900">
            Create your account
          </h1>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            Join Hadassah Store and start discovering amazing products.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

          {/* Full Name */}
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Full name
            </label>

            <input
              id="name"
              type="text"
              autoComplete="name"
              placeholder="Enter your full name"
              {...register("name", {
                required: "Your full name is required.",
                minLength: {
                  value: 2,
                  message: "Your name must contain at least 2 characters.",
                },
              })}
              className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
            />

            {errors.name && (
              <p className="mt-2 text-sm text-red-500">
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
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Password
            </label>

            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                autoComplete="new-password"
                placeholder="At least 8 characters"
                {...register("password", {
                  required: "A password is required.",
                  minLength: {
                    value: 8,
                    message: "Your password must contain at least 8 characters.",
                  },
                })}
                className="w-full rounded-lg border border-gray-200 px-4 py-3 pr-20 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-green-600"
              >
                {/* Use the same eye / eye-off SVG from Login.jsx */}
              </button>
            </div>

            {errors.password && (
              <p className="mt-2 text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Confirm password
            </label>

            <div className="relative">
              <input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                autoComplete="new-password"
                placeholder="Enter your password again"
                {...register("confirmPassword", {
                  required: "Please confirm your password.",
                  validate: (value) =>
                    value === password || "Your passwords do not match.",
                })}
                className="w-full rounded-lg border border-gray-200 px-4 py-3 pr-20 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
              />

              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                aria-label={
                  showConfirmPassword ? "Hide password" : "Show password"
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-green-600"
              >
                {/* Use the same eye / eye-off SVG from Login.jsx */}
              </button>
            </div>

            {errors.confirmPassword && (
              <p className="mt-2 text-sm text-red-500">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-lg bg-green-600 px-5 py-3.5 font-semibold text-white shadow-sm transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Creating account..." : "Create Account"}
          </button>
        </form>

        {/* Login Link */}
        <p className="mt-7 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-green-600 transition hover:text-green-700"
          >
            Log in
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