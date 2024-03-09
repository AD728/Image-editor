import { useForm } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/router";

const SignupForm = () => {
  const router = useRouter();

  const {
    watch,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  interface Signup {
    name: string;
    email: string;
    password: string;
    c_password: string;
  }

  const onSubmit = (data: Signup) => {
    const { name, email, password, c_password } = data;
    localStorage.setItem(
      "cred",
      btoa(
        JSON.stringify({
          e: email,
          p: password,
        })
      )
    );
    router.push("/");
  };

  return (
    <>
      <div className="flex h-screen w-full items-center justify-center bg-gradient-to-br dark:bg-gradient-to-br from-red-300 dark:from-purple-500 dark:to-purple-900">
        <div className="w-full max-w-sm rounded-2xl bg-gradient-to-br from-blue-200 dark:to-black  dark:from-black px-6 py-8 shadow-2xl">
          <h1 className="mb-6 text-center text-3xl font-bold text-gray-800 dark:text-white">
            Get on Board
          </h1>
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              className="flex h-10 w-full border border-input text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-md bg-purple-50 px-4 py-2 text-gray-800 placeholder-gray-400"
              placeholder="Name"
              type="text"
              {...register("name", { required: "Please enter your name" })}
            />
            {errors?.name?.message && (
              <p className="text-red-600 text-sm text-left">
                {errors?.name?.message?.toString()}
              </p>
            )}
            <input
              className="flex h-10 w-full border border-input text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-md bg-purple-50 px-4 py-2 text-gray-800 placeholder-gray-400"
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
              <p className="text-red-600 text-sm text-left">
                {errors?.email?.message?.toString()}
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
            <input
              className="flex h-10 w-full border border-input text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-md bg-purple-50 px-4 py-2 text-gray-800 placeholder-gray-400"
              placeholder="Confirm Password"
              type="password"
              {...register("c_password", {
                required: "Please enter your password",
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
            />
            {errors?.c_password?.message && (
              <p className="text-red-600 text-sm text-left">
                {errors?.c_password?.message?.toString()}
              </p>
            )}
            <div className="mt-4 text-xs text-center text-gray-400">
              By creating an account, you agree to the
              <Link className="text-orange-700" href="#">
                Terms and Use
              </Link>
              and{"\n                "}
              <Link className="text-orange-700" href="#">
                Privacy Policy
              </Link>
              .{"\n              "}
            </div>
            <button
              type="submit"
              className="mt-4 rounded-md bg-orange-700 py-2 text-white hover:bg-orange-900"
            >
              Sign Up
            </button>
          </form>
          <div className="mt-4 text-center text-sm text-gray-400">
            <Link className="text-orange-700" href="/">
              I am already a member
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupForm;
