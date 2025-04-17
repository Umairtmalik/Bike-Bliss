"use client"; // Mark this as a Client Component

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const username = form.username.value;
    const password = form.password.value;

    try {
      const result = await signIn("credentials", {
        username,
        password,
        redirect: false, // Prevent automatic redirection
      });

      if (result?.error) {
        setError("Invalid credentials. Try testuser / password.");
      } else {
        router.push("/"); // Redirect to homepage upon successful login
      }
    } catch (err) {
      setError("An unexpected error occurred.");
    }
  };

  return (
    <div className="min-h-screen bg-[#14121F] text-white flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-red-900 text-white p-8 rounded-lg space-y-4 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center">Login</h2>

        {/* Error Message */}
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        {/* Username Field */}
        <input
          type="text"
          name="username"
          placeholder="Username"
          required
          className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
        />

        {/* Password Field */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#14121F] text-white py-2 rounded-lg hover:bg-opacity-90 transition-all"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default LoginPage;