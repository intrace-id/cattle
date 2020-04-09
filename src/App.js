import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import './App.scss';
import './styles/bootstrap-grid.css';

import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ErrorPage from './containers/404.jsx';

function App() {
  return (
    <Provider store={ store }>
      <Router>
        <Navbar/>
        <Switch>
          {/* <Route exact path="/" render={ () => ( <Homepage/> ) }/> */}
          <Route component={ () => <ErrorPage/> }/>
        </Switch>
        <Footer/>
      </Router>
    </Provider>
  );
}

export default App;
