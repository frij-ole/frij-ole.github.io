import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import MainPage from './components/MainPage/MainPage.js';
import CvPage from './components/CvPage/CvPage.js';

function App() {
  const navItems = [{name: "home", route: '/'}, {name: "cv", route: "/cv"}]
  return (
    <>
    <Router>
      <Navbar items={navItems}/>
      <Switch>
        <Route path="/" exact component={MainPage}/>
        <Route path="/cv" exact component={CvPage}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
