import React from 'react';
import { Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './Home.scss';

function Home() {
  return (
    <div className="Home container">
      <div className="row">
        <h1>Choississez parmi plus de 500 cirques et spectacles celui qui vous fera rêver</h1>
        <img className="acrobatie" src="/images/home.jpg" alt="acrobatie" />
      </div>
      <NavLink to="Nos-cirques"><Button color="primary">Les cirques</Button>{' '}</NavLink>
      <NavLink to="Votre-cirque"><Button color="primary">Votre cirque</Button>{' '}</NavLink>
    </div>
  );
}

export default Home;
