import React, { useRef, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import "./Register.module.css";

const Register = () => {
  const navigate = useNavigate();
  const [redirect, setRedirect] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const name = useRef();
  const email = useRef();
  const password = useRef();

  const API_URL =
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAp5jc40aC635TNrj0glS_jk62sAShE6OM";
  const api_key = "AIzaSyAp5jc40aC635TNrj0glS_jk62sAShE6OM";

  const submitHandler = async (e) => {
    e.preventDefault();

    let payload = {
      name: name.current.value,
      email: email.current.value,
      password: password.current.value,
      returnSecureToken: true,
    };

    console.log(payload);

    setIsLoading(true);

    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          res.json().then((data) => {
            // show error modal
            console.log(data);
            let errorMessage = "Authentication Failed";
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        console.log(data);
        navigate('/login');
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  if (redirect) {
    return <Navigate to="/login" />;
  }

  return (
    <main className="form-signin">
      {isLoading && <p>Loading...</p>}

      <form onSubmit={submitHandler}>
        <h1 className="h3 mb-3 fw-normal">Please sign Up</h1>

        <input
          type="text"
          className="form-control"
          placeholder="Username"
          ref={name}
          required
        />
        <br />

        <input
          type="email"
          className="form-control"
          placeholder="Email"
          ref={email}
          required
        />
        <br />

        <input
          type="password"
          className="form-control"
          placeholder="Password"
          ref={password}
          required
          minLength="7"
        />

        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Register
        </button>
        <p className="mt-5 mb-3 text-muted">&copy; 2022</p>
      </form>
    </main>
  );
};

export default Register;
