import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom"
import About from './pages/About'
import Home from './pages/Home'
import Header from './components/Header'

import './App.css';

import styled from 'styled-components'

// TODO: change this into .tsx

function App() {
  return (
    <Router>
      <div>
        <Header></Header>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
