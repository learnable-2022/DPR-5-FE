// import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import GetStarted from './components/GetStarted';
import Welcome from './components/Welcome';
import Login from './components/Login';
import logo from './Assets/Img/logo.png'


export default function App() {
  return (
    <div>
        <header>
                <img src={logo} alt="Logo" className="logo" />
            </header>
          <div className="App">
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="getStarted" element={<GetStarted />} />
              <Route path="login" element={<Login/>} />
            </Routes>
          </div>
        
    </div>
  );
}
