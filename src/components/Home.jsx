import React from 'react';
import { Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <div className="Home">
      <NavLink to="Nos-cirques"><Button color="primary">Les cirques</Button>{' '}</NavLink>
      <NavLink to="Votre-cirque"><Button color="primary">Votre cirque</Button>{' '}</NavLink>
    </div>
  );
}

export default Home;
