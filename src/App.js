import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import './App.scss';
import './styles/bootstrap-grid.css';

import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

import HomePage from './containers/HomePage';
import TrainingPage from './containers/TrainingPage';
import ArticlePage from './containers/ArticlePage';
import ErrorPage from './containers/404.jsx';

function App() {
  return (
    <Provider store={ store }>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" render={ () => ( <HomePage/> ) }/>
          <Route exact path="/trainings/:trainingId" render={ () => ( <TrainingPage/> ) }/>
          <Route exact path="/articles/:articleId" render={ () => ( <ArticlePage/> ) }/>
          <Route component={ () => <ErrorPage/> }/>
        </Switch>
        <Footer/>
      </Router>
    </Provider>
  );
}

export default App;
