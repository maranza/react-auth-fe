import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../store/auth-context";

import "./Navigation.css";

const Navigation = () => {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
    // TODO: send to backend for logout
    navigate('/');

  };

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      <div className="container-fluid">
        <Link to="#" className="navbar-brand">
          Coin Dispenser
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-md-0"></ul>

          <div className="d-flex navbar-nav">
            {!isLoggedIn && (
              <li className="nav-item">
                <Link
                  to="/register"
                  className="nav-link active"
                  aria-current="page"
                >
                  Register
                </Link>
              </li>)}
              {!isLoggedIn &&  (<li className="nav-item">
                <Link
                  to="/login"
                  className="nav-link active"
                  aria-current="page"
                >
                  Login
                </Link>
              </li>)}
              {isLoggedIn &&
              <button className="btn btn-outline-success" onClick={logoutHandler}>
              Logout
            </button>
              }
            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
