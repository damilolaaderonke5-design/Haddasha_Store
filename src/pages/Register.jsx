import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


export default function Register() {
  const {register, handleSubmit, watch,
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
<main className="flex min-h-screen items-center justify-center bg-gray-50 px-6 py-12">
<section className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-sm sm:p-10">
<div className="mb-8 text-center">
<Link to="/" className="text-3xl font-extrabold text-gray-900">
Haddasha_Store
</Link>

      <h1 className="mt-6 text-2xl font-bold text-gray-900">
        Create your account
      </h1>

      <p className="mt-2 text-sm text-gray-500">
        Join Haddasha_Store and start discovering amazing products.
      </p>
    </div>

    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Full name */}
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

        <input
          id="password"
          type="password"
          autoComplete="new-password"
          placeholder="At least 8 characters"
          {...register("password", {
            required: "A password is required.",
            minLength: {
              value: 8,
              message: "Your password must contain at least 8 characters.",
            },
          })}
          className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
        />

        {errors.password && (
          <p className="mt-2 text-sm text-red-500">
            {errors.password.message}
          </p>
        )}
      </div>

      {/* Confirm password */}
      <div>
        <label
          htmlFor="confirmPassword"
          className="mb-2 block text-sm font-semibold text-gray-700"
        >
          Confirm password
        </label>

        <input
          id="confirmPassword"
          type="password"
          autoComplete="new-password"
          placeholder="Enter your password again"
          {...register("confirmPassword", {
            required: "Please confirm your password.",
            validate: (value) =>
              value === password || "Your passwords do not match.",
          })}
          className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
        />

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
        className="w-full rounded-lg bg-green-600 px-5 py-3.5 font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Creating account..." : "Create Account"}
      </button>
    </form>

    <p className="mt-6 text-center text-sm text-gray-500">
      Already have an account?{" "}
      <Link
        to="/login"
        className="font-semibold text-green-600 hover:text-green-700"
      >
        Log-In
      </Link>
    </p>
  </section>
</main>

);
}


