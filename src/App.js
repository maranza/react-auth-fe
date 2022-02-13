import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/fragments/Navigation';

import Login from './components/login/Login';
import Register from './components/register/Register';
import CoinDispenser from './components/coin-dispenser/CoinDispenser';
import { useContext } from 'react';
import AuthContext from './store/auth-context';


function App() {

  const authCtx = useContext(AuthContext);

  return (
    <div className="App">
      <BrowserRouter>
       
       <Navigation />

        <Routes>
          {!authCtx.isLoggedIn && (<Route path='/' exact element={<Login/>} />)}
          {!authCtx.isLoggedIn && (<Route path='/login' element={<Login/>} />)}
          {!authCtx.isLoggedIn && (<Route path='/register' element={<Register/>} />)}
          {authCtx.isLoggedIn && (<Route path='/coin-dispenser' element={<CoinDispenser/>} />)}
          <Route path='*'>
            <Route to='/' element={<Login/>} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
