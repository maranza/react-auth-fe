import React, { useContext, useRef, useState } from "react";
import AuthContext from "../../store/auth-context";
import { useNavigate } from 'react-router-dom';

import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const email = useRef();
  const password = useRef();

  const authCtx = useContext(AuthContext);

  const API_URL =
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAp5jc40aC635TNrj0glS_jk62sAShE6OM";

  const submitHandler = async (e) => {
    e.preventDefault();

    let payload = {
      email: email.current.value,
      password: password.current.value,
      returnSecureToken: true,
    };

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
        authCtx.login(data.idToken, );
        navigate('/coin-dispenser');
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <main className="form-signin">
      {isLoading && <p>Loading...</p>}
      <form onSubmit={submitHandler}>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <input
          type="email"
          className="form-control"
          placeholder="name@example.com"
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
        />

        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Login
        </button>
        <p className="mt-5 mb-3 text-muted">&copy; 2022</p>
      </form>
    </main>
  );
};

export default Login;
