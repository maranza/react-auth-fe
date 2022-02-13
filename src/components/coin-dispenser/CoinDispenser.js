import React, { useContext, useRef } from 'react'
import AuthContext from '../../store/auth-context';

const CoinDispenser = () => {
  const amountRef = useRef();

  const authCtx = useContext(AuthContext);

  const submitHandler = (e) => {
    e.preventDefault();

    const amount = (+amountRef.current.value);
    console.log(amount);
    amountRef.current.value='';

    // fetch('', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'authentication': 'Bearer ' + authCtx.token,
    //   },
    //   body: JSON.stringify({amount})
    // })

  }

  return (
    <div>
    <h1>Coin Dispenser</h1>

    <main className="form-signin">

      <form onSubmit={submitHandler}>
        <h1 className="h3 mb-3 fw-normal">Key in the amount</h1>

        <input
          type="number"
          className="form-control"
          placeholder="enter number"
          ref={amountRef}
          required
          min='1'
        />
        <br />

        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Submit
        </button>
        <p className="mt-5 mb-3 text-muted">&copy; 2022</p>
      </form>
    </main>
    </div>

  );
};

export default CoinDispenser;