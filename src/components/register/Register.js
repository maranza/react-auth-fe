import React, { useState } from 'react'
import {Navigate} from 'react-router-dom'

import './Register.module.css';

const Register = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    console.log({name, email, password});

    await fetch('http://localhost:8000/api/register', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name,
        email,
        password
      })

    });
  };

  if (redirect) {
    return <Navigate to='/login' />;
  }

  return (
    <main className="form-signin">
      <form onSubmit={handleFormSubmit}>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <input type="text" className="form-control" placeholder="Username" onChange={e => setName(e.target.value)} />
        <br />

        <input type="email" className="form-control" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
        <br />

        <input type="password" className="form-control" placeholder="Password" onChange={e => setPassword(e.target.value)}/>

        <button className="w-100 btn btn-lg btn-primary" type="submit">Register</button>
        <p className="mt-5 mb-3 text-muted">&copy; 2022</p>
      </form>
    </main>
  );
};

export default Register;
