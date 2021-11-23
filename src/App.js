import { Route, Switch } from 'react-router';
import Cv from './components/Cv';
import CvDetail from './components/CvDetail';
import CvList from './components/CvList';
import Home from './components/Home';
import Page from './components/Page';
import Login from './components/Login';
import PersonUpdate from './components/PersonUpdate';
import Register from './components/Register';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">  
      <Header />    
      <Switch>
        <Route exact path="/" render={props => (<Page />)} />
        <Route exact path="/login" render={props => (<Login {...props}/>)} />
        <Route exact path="/home/:id" render={props => (<Home {...props} />)} />
        <Route exact path="/home/:id/update" render={props => (<PersonUpdate {...props} />)} />
        <Route exact path="/register" render={props => (<Register />)} />
        <Route exact path="/cvList/:id" render={props => (<CvList {...props} />)} />
        <Route exact path="/cvForm/:id" render={props => (<Cv {...props} />)} />
        <Route exact path="/cvFormDetail/:id/:personId" render={props => (<CvDetail {...props}/>)} />        
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
