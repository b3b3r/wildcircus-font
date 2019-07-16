import React from 'react';
import BarNav from './components/Navbar';
<<<<<<< Updated upstream
=======
import Home from './components/Home';
import Circus from './containers/Circus';
import { Switch, Route } from 'react-router-dom';
>>>>>>> Stashed changes
import './App.css';

function App() {
  return (
    <div className="App">
      <BarNav />
<<<<<<< Updated upstream
=======
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="Nos cirques" component={Circus} />
      </Switch>
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
