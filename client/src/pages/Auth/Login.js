import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../context/auth"; // Single import
import Layout from "../../components/Layout/Layout";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { auth, setAuth } = useAuth(); // Destructured auth and setAuth
  const navigate = useNavigate();

  // Form submit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/login", { email, password });
      if (res.data.success) {
        toast.success(res.data.message);

        // Set the auth state with user and token
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });

        // Save the auth data to localStorage
        localStorage.setItem("auth", JSON.stringify(res.data));

        navigate("/"); // Redirect to the home page
      } else {
        toast.error(res.data.message); // Show error if login fails
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout>
      <div className="register-container">
        <h2>Login</h2>
        <p>Please enter your email and password:</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              name="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="register-button">
            Login
          </button>
          <p>
            Don't have an account?{" "}
            <NavLink to="/register">
              Create one
            </NavLink>
          </p>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
