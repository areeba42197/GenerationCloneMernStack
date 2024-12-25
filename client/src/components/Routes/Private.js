import { useEffect, useState } from "react";
import { useAuth } from "../../context/auth"; // Remove setAuth if not using
import { Outlet } from "react-router-dom";
import axios from "axios"; 
import Spinner from "../Spinner"; 

export default function PrivateRoute() {
  const [ok, setOk] = useState(false);
  const { auth } = useAuth(); // Only destructure auth

  useEffect(() => {
    const authCheck = async () => {
      try {
        const res = await axios.get('/api/v1/auth/user-auth', {});
        
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

  return ok ? <Outlet /> : <Spinner />;
}
