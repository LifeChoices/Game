import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import Splash from './Splash';
import Portfolio from './Portfolio';

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route component={Splash} path='/' exact />
          <Route path='/portfolio' component={Portfolio} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
