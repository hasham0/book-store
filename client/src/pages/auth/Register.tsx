import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { RegisterTS } from "../../lib/validations/register-validation";

type Props = {};

export default function Register({}: Props) {
  const [message, setMessage] = useState<string | undefined>(undefined);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<RegisterTS>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<RegisterTS> = async (data) => {
    try {
      console.log("🚀 ~ onSubmit ~ data:", data);
    } catch (error) {
      setMessage("Please provide a valid email and password");
      console.error(
        "🚀 ~ constonSubmit:SubmitHandler<LoginTS>= ~ error:",
        error,
      );
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      //   await signInWithGoogle();
      toast.success("Register successful!");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      toast.error("Google sign in failed!");
      console.log("🚀 ~ handleGoogleSignIn ~ error:", error);
    }
  };
  return (
    <div className="flex h-[calc(100vh-120px)] items-center justify-center">
      <div className="mx-auto mb-4 w-full max-w-sm rounded bg-white px-8 pb-8 pt-6 shadow-md">
        <h2 className="mb-4 text-xl font-semibold">Register YourSelf</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="email"
            >
              Name
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              className="w-full appearance-none rounded border px-3 py-2 leading-tight shadow focus:shadow focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              className="w-full appearance-none rounded border px-3 py-2 leading-tight shadow focus:shadow focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              {...register("password", { required: true })}
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full appearance-none rounded border px-3 py-2 leading-tight shadow focus:shadow focus:outline-none"
            />
          </div>
          {message && (
            <p className="mb-3 text-xs italic text-red-500">{message}</p>
          )}
          <div>
            <button className="rounded bg-blue-500 px-8 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none">
              Register{" "}
            </button>
          </div>
        </form>
        <p className="mt-4 align-baseline text-sm font-medium">
          Already have an account? Please{" "}
          <Link to="/login" className="text-blue-500 hover:text-blue-700">
            Login
          </Link>
        </p>

        {/* google sign in */}
        <div className="mt-4">
          <button
            onClick={handleGoogleSignIn}
            className="flex w-full flex-wrap items-center justify-center gap-1 rounded bg-secondary px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
          >
            <FaGoogle className="mr-2" />
            Sign in with Google
          </button>
        </div>

        <p className="mt-5 text-center text-xs text-gray-500">
          ©2025 Book Store. All rights reserved.
        </p>
      </div>
    </div>
  );
}
