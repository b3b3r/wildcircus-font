import React from 'react';
import BarNav from './components/Navbar';
import Home from './components/Home';
import Circus from './containers/Circus';
import YourCircus from './containers/YourCircus';
import { Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <BarNav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Nos-cirques" component={Circus} />
        <Route path="/Votre-cirque" component={YourCircus} />
      </Switch>
    </div>
  );
}

export default App;
