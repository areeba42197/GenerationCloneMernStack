import { useEffect, useState } from "react";
import { useAuth } from "../../context/auth";
import { Outlet } from "react-router-dom";
import axios from "axios"; // Import axios
import Spinner from "../Spinner"; 


 // Import Spinner component

export default function AdminRoute() {
  const [ok, setOk] = useState(false);
  const { auth, setAuth } = useAuth(); // Destructure auth and setAuth from context

  useEffect(() => {
    // Set axios header whenever auth.token changes
    if (auth?.token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${auth.token}`;
    }

    const authCheck = async () => {
      try {
        const res = await axios.get('/api/v1/auth/admin-auth', {
          headers: { "Authorization": `Bearer ${auth?.token}` }
        });

        if (res.data.ok) {
          setOk(true);
        } else {
          setOk(false);
        }
      } catch (error) {
        setOk(false); // If there's an error, set ok to false
      }
    };

    if (auth?.token) {
      authCheck();
    } else {
      setOk(false); // If no token is present, set ok to false
    }
  }, [auth?.token]); // Dependency on auth token

  // If authenticated, show the protected route content (Outlet), otherwise show spinner
  return ok ? <Outlet /> : <Spinner path="" />;
}
