import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Register from './pages/Register';
import LoginForm from './pages/LoginForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router basename="/reactlogin/">
        <div className="App">
          <div className="App__Side">
          <div className="App__Form">
          {/* <div className="PageSwitcher">
                <NavLink to="/Login" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Login</NavLink>
                <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Register</NavLink>
              </div> */}


              <Route exact path="/" component={Register}>
              </Route>
              <Route path="/Login" component={LoginForm}>
              </Route>
             

          </div>
         
        </div>
        </div>
      </Router>
    );
  }
}
export default App;
