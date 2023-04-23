import React, { useContext, useState } from "react";
import authContext from "../../src/context/authContext";
import { Auth } from "aws-amplify";
import Loader from "../../components/utils-components/Loader";

const Login = () => {
  const { isAuth, setIsAuth } = useContext(authContext);
  const [isLoading, setIsLoading] = useState();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const { target } = e;
    try {
      const user = await Auth.signIn(target.email.value, target.password.value);
      setIsAuth(true);
      console.log("User signed in successfully!", user);
    } catch (error) {
      console.log("error signing in", error);
    }
  };

  return (
    <section className="text-white h-4/5 p-10 flex flex-col items-center justify-around text-center">
      <div className="flex flex-col gap-7">
        <h1 className="text-6xl tracking-wider">Login</h1>
        <h4 className="text-xl">
          Welcome to Vocal. Use your credentials to login
        </h4>
      </div>
      <form
        onSubmit={handleLoginSubmit}
        className="flex flex-col gap-8 items-center w-2/5 h-1/2 p-10 bg-white rounded-md text-primary-main"
      >
        <div className="w-full flex flex-col items-start gap-3">
          <label htmlFor="email" className="font-semibold">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full bg-transparent hover:outline-none focus:outline-none text-primary-main border-b-2 p-2"
          />
        </div>
        <div className="w-full flex flex-col items-start gap-3">
          <label htmlFor="password" className="font-semibold">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className="w-full bg-transparent hover:outline-none focus:outline-none text-primary-main border-b-2 p-2"
          />
        </div>
        <input
          type="submit"
          className="text-white bg-primary-main rounded-md px-5 py-3 cursor-pointer"
          value="Sign In"
        />
      </form>
    </section>
  );
};

export default Login;
