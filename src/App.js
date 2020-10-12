import React from 'react';
import './App.css';
import DesktopView from "./Pages/DesktopView"
import Container from "@material-ui/core/Container"
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavButton from './Components/NavButton';
import { AppBar } from '@material-ui/core';
import NavigationDrawer from "./NavDrawer"
// import MenuIcon from '@material-ui/icons/Menu';
import IconButton from "@material-ui/core/IconButton"
import theme from "./theme"
import 'fontsource-roboto';
import NavDrawer from './NavDrawer';


function App() {

  return (
    <div className="App">
      <AppBar color="primary" position="static">
        <Toolbar>
        <NavDrawer />
        <Typography variant="h5" >

      Car Rider Tracker
    </Typography>
        </Toolbar>               
          
        </AppBar>
        <Container fixed>
          <Router>
            {/* <NavButton /> */}
            <Switch>
              <Route exact path="/">
                <DesktopView />
              </Route>
              <Route path="/mobile">
                <h2>Mobile View Placeholder</h2>
              </Route>
            </Switch>
          </Router>
        </Container>

      
    </div>
  );
}

export default App;
