import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/router";

interface Signup {
  name: string;
  email: string;
  password: string;
  c_password: string;
}

const SignupForm = () => {
  const router = useRouter();

  const {
    watch,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Signup>(); // Specify Signup as the type parameter

  const onSubmit: SubmitHandler<Signup> = (data) => {
    // Use SubmitHandler with Signup type
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
            {/* Input fields */}
          </form>
        </div>
      </div>
    </>
  );
};

export default SignupForm;
