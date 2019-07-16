import React from 'react';
import BarNav from './components/Navbar';
import Home from './components/Home';
import Circus from './containers/User/Circus';
import YourCircus from './containers/User/YourCircus';
import Footer from './components/Footer';
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
      <Footer />
    </div>
  );
}

export default App;
