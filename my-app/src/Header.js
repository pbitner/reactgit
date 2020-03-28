import React from 'react';
import logo from './logo.svg';
import './styles/Header.css';
import './styles/variables.scss';

function Header() {
  return (
      <header className="App-header">
        <img src={logo} />
        <div className="vertical-align">
          <h3>Header</h3>
        </div>
        
      </header>
  );
}

export default Header;
