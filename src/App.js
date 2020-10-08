import React from 'react';
import './App.css';
import DesktopView from "./Pages/DesktopView"
import Grid from "@material-ui/core/Grid"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavButton from './Components/NavButton';

function App() {
  
  return (
    <div className="App">
      <Grid container justify="center" className="root" spacing={4}>
        <header className="Header"><h1>
          Car Rider Tracker
      </h1></header>
        <Router>
          <Grid item xs={12}>
            <NavButton />
            </Grid>
            <Switch>
              <Route exact path="/">
                <DesktopView />
              </Route>
            </Switch>
        </Router>
      </Grid>
    </div>
  );
}

export default App;
