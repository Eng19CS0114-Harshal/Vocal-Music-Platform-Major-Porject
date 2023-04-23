import "../styles/globals.css";
import authContext from "../src/context/authContext";
import { useState, useEffect } from "react";
import { Amplify } from "aws-amplify";
import awsconfig from "../src/aws-exports";
import { Auth } from "aws-amplify";
import Loader from "../components/utils-components/Loader";

Amplify.configure(awsconfig);

function MyApp({ Component, pageProps }) {
  const [isAuth, setIsAuth] = useState();
  const [isLoading, setIsLoading] = useState();

  const checkUser = async () => {
    setIsLoading(true);
    // check local storage verified entry for boolean false,
    // if false redirect to /auth/verify
    await Auth.currentAuthenticatedUser({
      bypassCache: true,
    })
      .then((user) => {
        console.log("Cognito user get data: ", user);
        setIsAuth(true);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("Cognito user get error: ", error);
        setIsAuth(false);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <authContext.Provider value={{ isAuth, setIsAuth }}>
      {isLoading ? <Loader /> : <Component {...pageProps} />}
    </authContext.Provider>
  );
}

export default MyApp;
