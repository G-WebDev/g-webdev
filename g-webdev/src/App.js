import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';

const Home = () => <h1>Home</h1>;
const Services = () => <h1>Services</h1>;
const Portfolio = () => <h1>Portfolio</h1>;
const Contact = () => <h1>Contact</h1>;

const App = () => {
  return (
    <Router>
      <Navbar />

      <Route exact path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contact" component={Contact} />
    </Router>
  );
};

export default App;
