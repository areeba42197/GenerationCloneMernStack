// Corrected AuthContext Implementation
import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

// Create Auth Context
const AuthContext = createContext();

// AuthProvider component
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });

  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      const parsedData = JSON.parse(data);
      setAuth(parsedData);
      // Set default authorization header for axios
      axios.defaults.headers.common["Authorization"] = parsedData.token;
    }
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom Hook
const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
