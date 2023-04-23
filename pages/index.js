import authContext from "../src/context/authContext";
import { useContext } from "react";
import Dashboard from "../components/dashboard-components/Dashboard";
import AuthDashboard from "../components/auth-components/AuthDashboard";

export default function Home() {
  const { isAuth } = useContext(authContext);

  return <>{isAuth ? <Dashboard /> : <AuthDashboard />}</>;
}
