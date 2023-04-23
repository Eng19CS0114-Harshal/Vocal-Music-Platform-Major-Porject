import React, { useContext } from "react";
import authContext from "../../src/context/authContext";
import { Auth } from "aws-amplify";

const Verify = ({ userEmail }) => {
  const { isAuth, setIsAuth } = useContext(authContext);

  const handleVerifySubmit = async (e) => {
    e.preventDefault();
    const { target } = e;
    try {
      const user = await Auth.confirmSignUp(userEmail, target.code.value);
      console.log("User verified successfully", user);
      setIsAuth(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="text-white h-4/5 p-10 flex flex-col items-center justify-around text-center">
      <div className="flex flex-col gap-7">
        <h1 className="text-6xl tracking-wider">Verify</h1>
        <h4 className="text-xl">
          Verify your email using the code sent to the registered email
        </h4>
      </div>
      <form
        onSubmit={handleVerifySubmit}
        className="flex flex-col gap-8 items-center w-2/5 h-1/2 p-10 bg-white rounded-md text-primary-main"
      >
        <div className="w-full flex flex-col items-start gap-3">
          <label htmlFor="code" className="font-semibold">
            Verification code
          </label>
          <input
            type="text"
            name="code"
            placeholder="Enter verification code"
            className="w-full bg-transparent hover:outline-none focus:outline-none text-primary-main border-b-2 p-2"
          />
        </div>
        <input
          type="submit"
          className="text-white bg-primary-main rounded-md px-5 py-3 cursor-pointer"
          value="Verify"
        />
      </form>
    </section>
  );
};

export default Verify;
