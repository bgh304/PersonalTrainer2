import React from 'react';
import './App.css';
import Customerlist from './components/Customerlist';
import Traininglist from './components/Traininglist';
import Home from './Home';
import Navigator from './Navigator';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//MUISTA BOOTSTRAP!
//MUISTA NAVIGATOR!

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Personal Trainer company
          </Typography>
        </Toolbar>
      </AppBar>
      <BrowserRouter>
        <Navigator />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/customerlist" component={Customerlist} />
            <Route path="/traininglist" component={Traininglist} />
            <Route render={() => <h1>Page not found</h1>} />
          </Switch>
        </div> 
      </BrowserRouter>
    </div>
  );
}

export default App;
