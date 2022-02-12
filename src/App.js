import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/fragments/Navigation';

import Login from './components/login/Login';
import Register from './components/register/Register';
import CoinDispenser from './components/coin-dispenser/CoinDispenser';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
       
       <Navigation />

        <Routes>
          <Route path='/' exact element={<Login/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/coin-dispenser' element={<CoinDispenser/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
