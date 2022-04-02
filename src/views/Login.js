import { useContext } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { state, handleFunction } = useContext(AuthContext);
  const { handleLogin, handleChange } = handleFunction;

  return (
    <div className="grid grid-cols-1 content-between h-screen">
      <Navbar />
      <div className="grid my-20 mx-auto w-1/3 rounded-lg border-2 border-gray-200 hover:shadow-2xl">
        <form className="p-10" onSubmit={handleLogin}>
          <h1 className="text-center text-4xl font-semibold mb-4">
            Log in to Jobbb.
          </h1>
          <div className="relative z-0 mb-6 w-full group">
            <input
              onChange={handleChange}
              id="email"
              type="email"
              name="email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-neutral-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="email"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-neutral-600 peer-focus:dark:text-neutral-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              onChange={handleChange}
              id="password"
              type="password"
              name="password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-neutral-600 peer"
              placeholder=" "
              minLength={8}
              required
            />
            <label
              htmlFor="password"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-neutral-600 peer-focus:dark:text-neutral-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
          </div>
          <div className="grid gap-6">
            <button
              type="submit"
              className="text-white bg-neutral-700 hover:bg-neutral-800 focus:ring-4 focus:outline-none focus:ring-neutral-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Log in
            </button>
            <span className="justify-self-center">
              Don't have an account yet?&nbsp;
              <Link
                to={"/signup"}
                className="text-gray-500 hover:underline hover:text-neutral-800"
              >
                Sign up
              </Link>
            </span>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
