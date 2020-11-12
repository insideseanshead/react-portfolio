import React from "react";
import './App.css';
import Hero from "./components/Hero";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Portfolio from "./pages/portfolio"
import Contact from "./pages/contact"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Hero />
      
      <div className="navBar">
        
        <Router>
        <NavBar />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/" component={Contact} />
        </Router>
        
      </div>
      <Footer />
    </div>
    
  );
}

export default App;
