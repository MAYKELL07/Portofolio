import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import GameDev from './components/GameDev';
import Coder from './components/Coder';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' exact component={Portfolio} />
        <Route path='/gamedev' component={GameDev} />
        <Route path='/coder' component={Coder} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;