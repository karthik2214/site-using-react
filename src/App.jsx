import React from 'react';
import Home from './components/Home';
import Contact from './components/Contact';
import {Route, Switch, Redirect } from "react-router-dom";
//import Error from "./components/Error";
import Navbar from './components/Navbar';
import About from './components/About';
import Service from './components/Service';
import Footer from './components/Footer';

const App = () => {
  
  
  
  return (
    <>
    <div className="navbar">
    <Navbar />
    </div>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/About' component={About} />
      <Route exact path='/Service' component={Service} />
      <Route exact path='/contact/' component={Contact} />
      <Route path='/contact/:name' component={Contact} />
     <Redirect to="/" />
    </Switch>
    <Footer />
    </>
    )
}

export default App;