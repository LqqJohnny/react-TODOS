import React, { Component } from 'react';
import {
  BrowserRouter  as Router,
  Route,
  Link
} from 'react-router-dom'

import Home from './components/Home';
import AddTodos from './components/AddTodos.js';
import Recycle from './components/Recycle.js';

import './css/reset.css';
import './css/sakura.css';
import './css/app.css';

//  redux



class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="logo">
              <span>TODOS</span>
          </div>

          <Router>
              <div>
                  <ul id="links">
                      <li><Link to="/">待做事项</Link></li>
                      <li><Link to="/recycle">回收站</Link></li>
                  </ul>
                  <Route exact path="/" component={Home}/>
                  <Route exact path="/recycle" component={Recycle}/>

              </div>
          </Router>
      </div>
    );
  }
}

export default App;
