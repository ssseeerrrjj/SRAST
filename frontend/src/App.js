import './App.css';
import React from 'react';
import PrivateRoute from './utils/PrivateRoute'

import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import Header from './components/Header'


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <PrivateRoute exact path='/' component={ HomePage }/>
        <Route path='/login' component ={ LoginPage }/>
      </Router>
    </div>
  );
}

export default App;
