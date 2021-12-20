import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Home from './components/pages/Home';
import Details from './components/pages/Details';

const App = () => {
  return (
      <Router>
        <div className="App">
          <Navbar />
          <section className="countries">
            <div className="container">
              <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/:name/details' element={<Details />} />
              </Routes>
            </div>
          </section>
        </div>
      </Router>
      );
}

export default App;
