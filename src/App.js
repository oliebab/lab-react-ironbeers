import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Beers from "./Pages/Beers.jsx";
import BeerDetails from "./Pages/BeerDetails";
import BeerRandom from "./Pages/BeerRandom";
import CreateBeer from "./Pages/CreateBeer";



function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={Beers} />
        <Route exact path="/random-beer" component={BeerRandom} />
        <Route exact path="/new-beer" component={CreateBeer} />
        <Route
          exact
          path="/beers/:id"
          component={BeerDetails}
        />
      </Switch>
      
    </div>
  );
}

export default App;
