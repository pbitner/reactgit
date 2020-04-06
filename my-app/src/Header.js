import React from 'react';
import Navbar from './Navbar';
import logo from './logo.svg';
import './styles/Header.css';
import './styles/variables.scss';

function Header() {
  return (
      <header className="App-header">
        <img src={logo} />
        <div className="vertical-align">
        <Navbar />
        </div>
        
      </header>
      
  );
}

export default Header;
