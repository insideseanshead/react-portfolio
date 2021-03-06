import React from "react";
import { Link } from "react-router-dom"
import "./styles.css"

export default function NavBar() {
  return (
    
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark ">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
            <Link to="/portfolio" className="nav-link">
              Portfolio
            </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="http://www.github.com/insideseanshead"
                target="_blank"
              >
                GitHub
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.linkedin.com/in/sean-victor-morgan/"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </nav>
  
  );
}
