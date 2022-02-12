import React from 'react'
import { Link } from 'react-router-dom';

import './Navigation.css'

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      <div className="container-fluid">

        <Link to='/' className="navbar-brand" >Coin Dispenser</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">

          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <Link to='/' className="nav-link active" aria-current="page">Home</Link>
            </li>
          </ul>

          <div className="d-flex navbar-nav">

          <li className="nav-item">
              <Link to='/register' className="nav-link active" aria-current="page" >Register</Link>
          </li>

          <li className="nav-item">
              <Link to='/login' className="nav-link active" aria-current="page" >Login</Link>
          </li>
            <button className="btn btn-outline-success" type="submit">Logout</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;