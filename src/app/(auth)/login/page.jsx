"use client";

import { FaGoogle } from "react-icons/fa6";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const LoginPage = () => {
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const router = useRouter();

    // Email login
    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMsg("");

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        try {
            const { data, error } = await authClient.signIn.email({
                email,
                password,
                rememberMe: true,
                callbackURL: "/",
            });

            if (error) {
                setErrorMsg(error.message || "Login failed");
                return;
            }

            router.push("/");
        } catch (err) {
            setErrorMsg("Something went wrong!");
        } finally {
            setLoading(false);
        }
    };

    // Google login
    const handleGoogleLogin = async () => {
        await authClient.signIn.social({
            provider: "google",
            callbackURL: "/",
        });
    };

    return (
        <div className="py-6 flex items-center justify-center bg-base-200 px-4">

            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

                {/* Title */}
                <h2 className="text-3xl font-bold text-center mb-6">
                    Welcome Back
                </h2>

                {/* Form */}
                <form className="space-y-5" onSubmit={handleLogin}>

                    {/* Email */}
                    <div>
                        <label className="label">
                            <span className="label-text font-medium">Email</span>
                        </label>
                        <input
                            name="email"
                            type="email"
                            required
                            placeholder="Enter your email"
                            className="input input-bordered w-full"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="label">
                            <span className="label-text font-medium">Password</span>
                        </label>
                        <input
                            name="password"
                            type="password"
                            required
                            placeholder="Enter your password"
                            className="input input-bordered w-full"
                        />
                    </div>

                    {/* Error */}
                    {errorMsg && (
                        <p className="text-red-500 text-sm text-center">
                            {errorMsg}
                        </p>
                    )}

                    {/* Login Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="btn btn-primary w-full"
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>

                {/* Divider */}
                <div className="divider my-6">OR</div>

                {/* Google Button */}
                <button
                    onClick={handleGoogleLogin}
                    className="btn btn-outline w-full flex items-center gap-2 text-green-700"
                >
                    <FaGoogle />
                    Continue with Google
                </button>

                {/* Register Link */}
                <p className="text-center text-sm mt-6">
                    Dont have an account?{" "}
                    <Link href="/register" className="text-primary font-semibold">
                        Register
                    </Link>
                </p>

            </div>
        </div>
    );
};

export default LoginPage;