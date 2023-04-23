import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import authContext from "../../src/context/authContext";
import { Auth } from "aws-amplify";

const Register = ({ setIsSelected, setUserEmail }) => {
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    const { target } = e;
    try {
      const user = await Auth.signUp(target.email.value, target.password.value);
      console.log("User signed up successfully!", user);
      setUserEmail(target.email.value);
      setIsSelected("verify");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="text-white h-4/5 p-10 flex flex-col items-center justify-around text-center">
      <div className="flex flex-col gap-7">
        <h1 className="text-6xl tracking-wider">Register</h1>
        <h4 className="text-xl">
          Welcome to Vocal. Register using your email and a password
        </h4>
      </div>
      <form
        onSubmit={handleRegisterSubmit}
        className="flex flex-col gap-8 items-center w-2/5 h-1/2 p-10 bg-white rounded-md text-primary-main"
      >
        <div className="w-full flex flex-col items-start gap-3">
          <label htmlFor="email" className="font-semibold">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter a email"
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
            placeholder="Create your password"
            className="w-full bg-transparent hover:outline-none focus:outline-none text-primary-main border-b-2 p-2"
          />
        </div>
        <input
          type="submit"
          className="text-white bg-primary-main rounded-md px-5 py-3 cursor-pointer"
          value="Register"
        />
      </form>
    </section>
  );
};

export default Register;
