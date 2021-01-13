import React, {Component} from 'react';
import {Provider} from './context';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.css';
import Navbar from './components/layouts/Navbar';
import Home from './components/pages/Home';
import Details from './components/pages/Details';

class App extends Component {
  render(){
    return (
      <Provider>
        <Router>
          <div className="App">
            <Navbar />
            <section className="countries">
              <div className="container">
                <Switch>
                  <Route exact path='/' >
                    <Home/>
                  </Route>
                  <Route path='/:name/details'>
                    <Details />
                  </Route>
                </Switch>
              </div>
            </section>
          </div>
        </Router>
      </Provider>
  );
  }
}

export default App;
