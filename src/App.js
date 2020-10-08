import React from 'react';
import './App.css';
import DesktopView from "./Pages/DesktopView"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="Header"><h1>
        Car Rider Tracker
      </h1></header>
      <Router>
        <div>
          <nav>
            <ul>
              <li><Link to="/">Desktop View</Link></li>
              <li><Link to="/mobile">Car Rider View</Link></li>
            </ul>
          </nav>
        </div>

        <Switch>
        <Route exact path="/">
          <DesktopView />
        </Route>
      </Switch>
      </Router>
      
    </div>
  );
}

export default App;
