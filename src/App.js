import React from 'react';
import logo from './logo.svg';
import './App.css';

import Navigator from "./Navigator"
import Home from "./Home"
import Features from "./Features"
import Contact from "./Contact"

const App = () => {
  return(
    <div>
      <Navigator />
      <Home />
      <Features />
      <Contact />
    </div>
  )
}
export default App;
