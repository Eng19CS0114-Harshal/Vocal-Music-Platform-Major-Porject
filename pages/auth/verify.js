import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import AuthNavbar from "../../components/auth-components/AuthNavbar";
import authContext from "../../src/context/authContext";
import { Auth } from "aws-amplify";

const Verify = () => {
  const { isAuth, setIsAuth } = useContext(authContext);
  const router = useRouter();

  const handleVerifySubmit = async (e) => {
    e.preventDefault();
    const { target } = e;
    try {
      const user = await Auth.confirmSignUp(
        target.email.value,
        target.code.value
      );
      console.log("User verified successfully", user);
      setIsAuth(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen flex flex-col">
      <AuthNavbar />
      <section className="text-white p-10">
        <h1 className="underline">{isAuth ? "Authorized" : "Unauthorized"}</h1>
        <form onSubmit={handleVerifySubmit}>
          <input type="text" name="email" placeholder="Enter email" />
          <input
            type="text"
            name="code"
            placeholder="Enter verification code"
          />
          <input type="submit" className="btn-secondary" value="Verify" />
        </form>
      </section>
    </div>
  );
};

export default Verify;
