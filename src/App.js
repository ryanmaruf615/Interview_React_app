import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Link } from "react-router-dom";

import './App.css';
import Navigation from "./Components/Navigation";

import {Switch} from "react-router";

import Services from "./Components/Services";
import Home from "./Components/Home";

function App() {
  return (
      <BrowserRouter>
    <div className="App">
      <Navigation/>
      <Switch>
          <Route>
              <Route exact path="/" component={Home}/>
              <Route exact path="/service" component={Services}/>
          </Route>
      </Switch>
    </div>

      </BrowserRouter>
  );
}

export default App;
