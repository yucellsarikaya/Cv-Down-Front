import React, { useState, useEffect } from 'react'
import { MainContext } from './context'

import { Route, Switch } from 'react-router';
import CvDetail from './components/CvDetail';
import CvList from './components/CvList';
import Home from './components/Home';
import Page from './components/Page';
import Login from './components/Login';
import PersonUpdate from './components/PersonUpdate';
import Register from './components/Register';
import Header from './components/Header';
import Footer from './components/Footer';
import SelectCvTemplate from './components/SelectCvTemplate';
import CvForm from './components/CvForm';

function App() {
  const [loginCase, setLoginCase] = useState(false);
  const [userId, setUserId] = useState();

  const data = {
    loginCase,
    setLoginCase,
    userId,
    setUserId
  }

  return (
    <MainContext.Provider value={data}>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" render={props => (<Page />)} />
          <Route exact path="/login" render={props => (<Login {...props} />)} />
          <Route exact path="/home/:id" render={props => (<Home {...props} />)} />
          <Route exact path="/home/:id/update" render={props => (<PersonUpdate {...props} />)} />
          <Route exact path="/register" render={props => (<Register />)} />
          <Route exact path="/cvList/:id" render={props => (<CvList {...props} />)} />
          <Route exact path="/cvForm/:id" render={props => (<CvForm {...props} />)} />
          <Route exact path="/cvFormDetail/:personId/:id" render={props => (<CvDetail {...props} />)} />
          <Route exact path="/templates/:id" render={props => (<SelectCvTemplate {...props} />)} />
        </Switch>
        <Footer />
      </div>
    </MainContext.Provider>
  );
}

export default App;
