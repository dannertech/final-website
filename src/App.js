import React, { Component } from 'react';
import Home from '../src/Pages/Home'
import Alexa from '../src/Pages/Alexa'
import Iphone from '../src/Pages/Iphone'
import Contact from '../src/Pages/Contact'
import Web from '../src/Pages/Web'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
     <Router>
       <Switch>
       <Route exact path="/" component={Home}></Route>
       <Route path="/iOS" component={Iphone}></Route>
       <Route path="/Alexa" component={Alexa}></Route>
       <Route path="/web" component={Web}></Route>
       <Route path="/Contact" component={Contact}></Route>
       </Switch>
     </Router>

    );
  }
}

export default App;
