import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom"

import { AppContextProvider, AppContext } from './context/AppContextProvider'

import About from './pages/About'
import Home from './pages/Home'
import Header from './components/Header'

import './App.css';

import styled from 'styled-components'
import Layout from './components/Layout'
import Theme from './components/Themes'
import Footer from './components/Footer'
import Posting from './pages/Posting'

// TODO: change this into .tsx

const App = () => {




  return (
    <AppContextProvider>
      <Theme>

        <Layout>

          <Router>
            <>
              <Header />

              <Switch>
                <Route exact path="/about">
                  <About />
                </Route>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/posting">
                  <Posting />
                </Route>

              </Switch>
            </>
          </Router>

          <Footer />

        </Layout>
      </Theme>


    </AppContextProvider>

  );
}

export default App;
