import React from "react";
import './App.css';
import Hero from "./components/Hero";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Portfolio from "./pages/portfolio"
import Contact from "./pages/contact"
import NavBar from "./components/NavBar"

function App() {
  return (
    <div className="App">
      <Hero />
      
      <div className="navBar">
        
        <Router>
        <NavBar />
        <Route exact path="/" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        </Router>
        
      </div>
    </div>
    
  );
}

export default App;
