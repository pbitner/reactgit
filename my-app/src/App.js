import React from 'react';
import { Router, Link } from  "@reach/router"
import Home from "./Home"
import Dash from "./Dash"
import Create from "./Create"
import ViewAll from "./ViewAll"
import './styles/Header.css';
import './styles/variables.scss';

function App() {
  return (
      <Router>
        <Home path="/" />
        <Dash path="/dashboard" />
        <Create path="/create" />
        <ViewAll path="/viewall" />
      </Router>
  );
}

export default App;
