import React from 'react';
import logo from './logo.svg';
import { Router, Link } from  "@reach/router"
import Home from "./Home"
import Dash from "./Dash"
import Create from "./Create"
import ViewAll from "./ViewAll"
import './styles/Header.css';
import './styles/variables.scss';

function Navbar() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="dashboard">Dashboard</Link>
        <Link to="create">Create</Link>
        <Link to="viewall">View</Link>
      </nav>

      <Router>
        <Home path="/" />
        <Dash path="dashboard" />
        <Create path="create" />
        <ViewAll path="viewall" />
      </Router>
    </div>
  );
}

export default Navbar;
