import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


export default function Login() {
  const { register, handleSubmit,
formState: { errors, isSubmitting },
} = useForm();

async function onSubmit(data) {
console.log("Login form data:", data);

alert(
  "Form validation successful! Real login will be connected to an authentication service later."
);

}

return (
<main className="flex min-h-screen items-center justify-center bg-gray-50 px-6 py-12">
<section className="w-full max-w-md rounded-2xl bg-white p-8 shadow-sm sm:p-10">
<div className="mb-8 text-center">
<Link to="/" className="text-3xl font-extrabold text-gray-900">
Haddasha_Store
</Link>

      <h1 className="mt-6 text-2xl font-bold text-gray-900">
        Welcome back
      </h1>

      <p className="mt-2 text-sm text-gray-500">
        Log in to continue shopping with Haddasha_Store.
      </p>
    </div>

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
        <label
          htmlFor="password"
          className="mb-2 block text-sm font-semibold text-gray-700">
          Password
        </label>

        <input
          id="password"
          type="password"
          autoComplete="current-password"
          placeholder="Enter your password"
          {...register("password", {
            required: "Your password is required.",
          })}
          className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
        />

        {errors.password && (
          <p className="mt-2 text-sm text-red-500">
            {errors.password.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-lg bg-green-600 px-5 py-3.5 font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60">
        {isSubmitting ? "Logging in..." : "Log In"}
      </button>
    </form>

    <p className="mt-6 text-center text-sm text-gray-500">
      Don't have an account?{" "}
      <Link
        to="/register"
        className="font-semibold text-green-600 hover:text-green-700">
        Create an account
      </Link>
    </p>
  </section>
</main>

);
}




