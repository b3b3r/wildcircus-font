import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.scss';

function Footer (){
    return (
      <div className="Footer">
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/Nos-cirques">Nos cirques</NavLink>
        <NavLink to="/Votre-cirque">Votre cirque</NavLink>
      </div>
    );
  }

export default Footer;