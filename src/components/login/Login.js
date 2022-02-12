import React from 'react'

import './Login.css'

const Login = () => {
  return (
    <main className="form-signin">
      <form>    
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

            <input type="email" className="form-control" placeholder="name@example.com" />
            <br/>

            <input type="password" className="form-control" placeholder="Password" />
    
          <button className="w-100 btn btn-lg btn-primary" type="submit">Login</button>
          <p className="mt-5 mb-3 text-muted">&copy; 2022</p>
      </form>
    </main>
  );
};

export default Login;
