import React from 'react';
import NavLink from 'react-router-dom'

function Menu(){
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          NWS-Alumni
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/Accueil">
                Accueil 
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Profil">
                Profil
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Articles">
                Articles
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
}

export default Menu;