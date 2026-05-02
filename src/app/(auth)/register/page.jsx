"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa6";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  //  Google login
  const signIn = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  const submitData = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const image = form.image.value;
    const password = form.password.value;

    try {
      const { error } = await authClient.signUp.email({
        name,
        email,
        password,
        image,
      });

      if (error) {
        setErrorMsg(error.message || "Signup failed");
        return;
      }

      await authClient.signOut();

      // redirect to login
      router.push("/login");
      router.refresh();

    } catch (err) {
     toast(err);
      setErrorMsg("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4 p-4">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        <h2 className="text-3xl font-bold text-center mb-6">
          Create an Account
        </h2>

        <form className="space-y-4" onSubmit={submitData}>

          <input
            name="name"
            required
            placeholder="Name"
            className="input input-bordered w-full"
          />

          <input
            name="email"
            required
            type="email"
            placeholder="Email"
            className="input input-bordered w-full"
          />

          <input
            name="image"
            required
            placeholder="Photo URL"
            className="input input-bordered w-full"
          />

          <input
            name="password"
            required
            type="password"
            placeholder="Password"
            className="input input-bordered w-full"
          />

          {errorMsg && (
            <p className="text-red-500 text-sm">{errorMsg}</p>
          )}

          <button disabled={loading} className="btn btn-primary w-full">
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <div className="divider my-6">OR</div>

        <button
          onClick={signIn}
          className="btn btn-outline w-full flex items-center gap-2"
        >
          <FaGoogle />
          Continue with Google
        </button>

        <p className="text-center text-sm mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-primary font-semibold">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
};

export default RegisterPage;