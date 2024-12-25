import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import { useAuth } from "../../context/auth";
import SearchInput from "../Form/SerachInput";

const Header = () => {
  const { auth, setAuth } = useAuth(); // Access auth state and setAuth function
  const navigate = useNavigate();
  const handleLogout = () => {
    setAuth({
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <>
      {/* Marquee Section */}
      <div className="marquee-container">
        <p className="marquee-text">
          <marquee scrollamount="10" className="marquee">
            BEAT THE HEAT WITH COOL SUMMER NEW INS!
          </marquee>
        </p>
      </div>

      {/* Navbar Section */}
      <nav className="navbar navbar-light bg-white">
        <div className="container-fluid d-flex align-items-center">
          {/* Navbar Toggler for Small Screens */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
            style={{ marginRight: "10px" }} // Adjust spacing
          >
            <span className="navbar-toggler-icon" />
          </button>

          {/* Left Icon */}
          <NavLink to="/" className="navbar-brand">
            <img
              src="/images/vector-package-icon.jpg"
              alt="Left Icon"
              width="35"
              height="35"
              style={{ marginLeft: "10px" }}
            />
          </NavLink>

          {/* Logo in the Center */}
          <div className="navbar-logo mx-auto">
            <NavLink to="/" className="navbar-brand">
              <img
                src="/images/Generation.jpg"
                alt="Logo"
                width="180"
                height="auto"
              />
            </NavLink>
          </div>

          {/* Right Icons */}
          <div className="navbar-icons d-flex align-items-center">
            {!auth?.user ? (
              <NavLink to="/login" className="nav-link">
                <img
                  src="/images/user.png"
                  alt="Profile"
                  width="30"
                  height="30"
                />
              </NavLink>
            ) : (
              <>
                <li
                  className="nav-item dropdown"
                  style={{ marginLeft: "-15px" }}
                >
                  <NavLink
                    className="nav-link dropdown-toggle d-flex align-items-center"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{
                      border: "none", // Remove the dot by removing the border
                    }}
                  >
                    {/* Adjust the name styling to move it left and up */}
                    <span
                      className="user-name"
                      style={{
                        marginLeft: "-10px", // Move the name left
                        marginTop: "-8px", // Move the name up
                        fontSize: "20px", // Adjust the font size if needed
                      }}
                    >
                      {auth?.user?.name}
                    </span>
                  </NavLink>
                  <ul className="dropdown-menu">
                    <li>
                      <NavLink
                        to={`/dashboard/${
                          auth?.user?.role === 1 ? "admin" : "user"
                        }`}
                        className="dropdown-item"
                      >
                        Dashboard
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/login"
                        className="dropdown-item"
                        onClick={handleLogout}
                      >
                        Logout
                      </NavLink>
                    </li>
                  </ul>
                </li>
              </>
            )}
          </div>

          <NavLink to="/cart" className="nav-link">
            <img
              src="/images/vector-shopping-bag-icon.jpg"
              alt="Cart"
              width="35"
              height="35"
            />
            
          </NavLink>
        </div>

        {/* Offcanvas Navbar for Mobile */}
        <div
          className="offcanvas offcanvas-start"
          tabIndex={-1}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <br />
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          <br />
          <br />
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-start flex-grow-1 pe-3">
              <li className="nav-item">
                <NavLink to="/newin" className="nav-link">
                  New In
                </NavLink>
              </li>
              <hr />
              <li className="nav-item">
                <NavLink to="/kurtas" className="nav-link">
                  Kurtas
                </NavLink>
              </li>
              <hr />
              <li className="nav-item">
                <NavLink to="/matching2piece" className="nav-link">
                  Matching 2 Piece
                </NavLink>
              </li>
              <hr />
              <li className="nav-item">
                <NavLink to="/suits3piece" className="nav-link">
                  Suits 3 Piece
                </NavLink>
              </li>
              <hr />
              <li className="nav-item">
                <NavLink to="/formals" className="nav-link">
                  Formals
                </NavLink>
              </li>
              <hr />
              <li className="nav-item">
                <NavLink to="/footware" className="nav-link">
                  Footware
                </NavLink>
              </li>
              <hr />
              <li className="nav-item">
                <NavLink
                  to="/annualsale"
                  className="nav-link"
                  style={{ color: "red" }}
                >
                  Annual Sale
                </NavLink>
              </li>
              <hr />
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">
                  About Us
                </NavLink>
              </li>
              <hr />
              <li className="nav-item">
                <NavLink to="/customercare" className="nav-link">
                  Customer Care
                </NavLink>
              </li>
              <hr />
              <li className="nav-item">
                <NavLink to="/policies" className="nav-link">
                  Privacy Policy
                </NavLink>
              </li>
              <hr />
              <li className="nav-item">
                <NavLink to="/sustanibility" className="nav-link">
                  Sustainability
                </NavLink>
              </li>
              <hr />
              <p>CONTACT US</p>
              <p className="small-text">
                <i className="fas fa-phone-alt"></i> +92-42-32500964
              </p>
              <p className="small-text">
                <i className="fab fa-whatsapp"></i> +92-301-1186294
              </p>
              <p className="small-text">
                <i className="fas fa-envelope"></i>{" "}
                customerservice@generation.com.pk
              </p>
            </ul>
          </div>
        </div>
      </nav>
      <SearchInput />
    </>
  );
};

export default Header;
