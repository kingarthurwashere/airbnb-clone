
//import './App.css';
import Home from './Home'
import Header from './Header';
import Footer from './Footer';
import SearchPage from './SearchPage';
import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Banner from './Banner';

function App ()
{
  return (

    //BEM
    <div className="App">
      <Router>
        <Header />
        <Banner />
        <Home />

        <Routes>
          <Route path='/Search' component={ SearchPage } />

          <Route path='/' component={ Home } />

        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
