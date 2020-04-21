import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import './App.scss';
import './styles/bootstrap-grid.css';

import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

import HomePage from './containers/HomePage';
import AboutUs from './containers/AboutUs';
import TrainingPage from './containers/TrainingPage';
import ArticlePage from './containers/ArticlePage';
import ErrorPage from './containers/404.jsx';

function App() {
  return (
    <Provider store={ store }>
      <Router>
        <Header/>
        <Navbar/>
        <Switch>
          <Route exact path="/" render={ () => ( <HomePage/> ) }/>
          <Route path='/about-us' render={ () => ( <AboutUs/> ) }/>
          <Route path="/trainings/:trainingId" render={ () => ( <TrainingPage/> ) }/>
          <Route path="/articles/:articleId" render={ () => ( <ArticlePage/> ) }/>
          <Route component={ () => <ErrorPage/> }/>
        </Switch>
        <Footer/>
      </Router>
    </Provider>
  );
}

export default App;
