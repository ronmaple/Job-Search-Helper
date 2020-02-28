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
import Layout from './components/Layout'
import Theme from './components/Themes'
import Footer from './components/Footer'

// TODO: change this into .tsx

function App() {
  return (
    <Theme>
      <Layout>

        <Router>
          <>
            <Header />

            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </>
        </Router>

        <Footer />

      </Layout>
    </Theme>
  );
}

export default App;
