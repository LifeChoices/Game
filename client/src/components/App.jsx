import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import Splash from './Splash';

const App = () => {
  return (
    <div>
      <NavBar />
      <h1>We in react</h1>
      <Splash />
      <Footer />
    </div>
  );
};

export default App;
