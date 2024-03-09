import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Link from "next/link";
import Cookies from "js-cookie";

interface Login {
  e?: string;
  p?: string;
  email?: string;
  password?: string;
}

const LoginForm = () => {
  const [error, setError] = useState("");
  const router = useRouter();

  const {
    watch,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const getFromLocalStorage = (key: string) => {
    if (!key || typeof window === "undefined") {
      return "";
    }
    return localStorage.getItem(key);
  };

  const cred: Login | null =
    getFromLocalStorage("cred") &&
    JSON.parse(atob(localStorage.getItem("cred")));

  const onSubmit = (data: Login) => {
    const { email, password } = data;
    if (email === cred?.e && password === cred?.p) {
      Cookies.set("session-token", "abcd");
      router.push("/dashboard");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <>
      <div className="flex h-screen w-full items-center justify-center bg-gradient-to-br dark:bg-gradient-to-br from-red-300 dark:from-purple-500 dark:to-purple-900 p-4">
        <div className="w-full max-w-sm rounded-2xl bg-gradient-to-br from-blue-200 dark:to-black  dark:from-black px-6 py-8 shadow-2xl">
          <h1 className="mb-6 text-center text-3xl font-bold text-gray-800 dark:text-white">
            Welcome Back
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <input
              className="flex h-10 w-full border border-input text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-md bg-purple-50 px-4 py-2  text-gray-800 placeholder-gray-400"
              placeholder="E-mail"
              type="email"
              {...register("email", {
                required: "Please enter your email",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors?.email?.message && (
              <p className="text-red-500 text-xs text-left">
                {errors?.email?.message.toString()}
              </p>
            )}
            <input
              className="flex h-10 w-full border border-input text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-md bg-purple-50 px-4 py-2 text-gray-800 placeholder-gray-400"
              placeholder="Enter Password"
              type="password"
              {...register("password", {
                required: "Please enter your password",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
            />
            {errors?.password?.message && (
              <p className="text-red-600 text-sm text-left">
                {errors?.password?.message.toString()}
              </p>
            )}
            {error && <p className="text-red-500 text-xs text-left">{error}</p>}
            <button
              type="submit"
              className="mt-4 rounded-md bg-orange-700 py-2 text-white hover:bg-orange-900"
            >
              Login
            </button>
          </form>
          <div className="mt-4 text-center text-xs text-gray-800 dark:text-gray-400">
            Not a member ?
            <Link className="text-orange-500" href="/signup">
              &nbsp;Sign Up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
