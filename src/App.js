import React from 'react';
import './App.css';
import { useHistory } from "react-router-dom"
import DesktopView from "./Pages/DesktopView"
import Container from "@material-ui/core/Container"
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { AppBar, Paper } from '@material-ui/core';
// import NavigationDrawer from "./NavDrawer"
import 'fontsource-roboto';
import NavDrawer from './NavDrawer';


function App() {
  const history = useHistory();
  const [devWidth, setDevWidth] = React.useState(window.innerWidth);
  React.useEffect(() => {
    if (devWidth < 760 && !(window.location.href.includes("/mobile"))) {
      window.location.href = "/mobile"
    }
  })

  return (
    <div className="App">
      <AppBar color="primary" position="static">
        <Toolbar>
          <NavDrawer
            drawerState={null}/>
          <Typography variant="h5" >Car Rider Tracker</Typography>
        </Toolbar>

      </AppBar>
      <Container maxWidth="lg" >
        <Paper style={{padding: "2rem", marginTop:"1rem"}} elevation={3}>
        <Router>
          <Switch>
            <Route exact path="/">
              <DesktopView />
            </Route>
            <Route path="/mobile">
              <h2>Mobile View Placeholder</h2>
              <p>Device Width: {devWidth}</p>
            </Route>
          </Switch>
        </Router>
        </Paper>
      </Container>


    </div>
  );
}

export default App;
