import React, { useEffect, useContext, useState } from "react";
import { useRouter } from "next/router";
import authContext from "../../src/context/authContext";
import { Auth } from "aws-amplify";
import Loader from "../utils-components/Loader";
import { MdMusicNote } from "react-icons/md";

const AuthNavbar = ({ isSelected, setIsSelected }) => {
  const { isAuth, setIsAuth } = useContext(authContext);
  const [isLoading, setIsLoading] = useState();

  const router = useRouter();

  const bypassLoginSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await Auth.signIn("yashrbelsare@gmail.com", "testtest1");
      setIsAuth(true);
      await setIsLoading(false);
      console.log("User signed in successfully!");
    } catch (error) {
      setIsLoading(false);
      console.log("error signing in", error);
    }
  };

  return (
    <>
      <div className="w-full text-white flex items-center justify-between p-10">
        <div
          className="flex items-end gap-5 cursor-pointer"
          onClick={() => setIsSelected("home")}
        >
          <MdMusicNote className="w-10 h-10 bg-or-primary rounded-full p-1 text-primary-main" />
          <a className="font-medium tracking-wide text-3xl">Vocal</a>
          {/* <button onClick={bypassLoginSubmit} className="btn-secondary">
            Bypass Authorization
          </button> */}
        </div>
        <ul className="flex items-center gap-8 m-0 p-0 list-none">
          <li
            className={`btn-primary border-b-2 border-transparent ${
              isSelected === "home" && "border-b-2 border-white"
            }`}
            onClick={() => setIsSelected("home")}
          >
            Home
          </li>
          <li
            className={`btn-primary border-b-2 border-transparent ${
              isSelected === "about" && "border-b-2 border-white"
            }`}
            onClick={() => setIsSelected("about")}
          >
            About us
          </li>
          <li
            className={`btn-primary border-b-2 border-transparent ${
              isSelected === "login" && "border-b-2 border-white"
            }`}
            onClick={() => setIsSelected("login")}
          >
            Login
          </li>
          <li
            className={`btn-primary border-b-2 border-transparent ${
              isSelected === "register" && "border-b-2 border-white"
            }`}
            onClick={() => setIsSelected("register")}
          >
            Register
          </li>
        </ul>
      </div>
    </>
  );
};

export default AuthNavbar;
