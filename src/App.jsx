import React from 'react';
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom';
import Home from './views/Home';
import ListBeers from './views/ListBeers';
import SingleBeer from './views/SingleBeer';
import RandomBeer from './views/RandomBeer';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/beers" component={ListBeers} exact />
          <Route
            path="/beers/:id"
            render={(props) => <SingleBeer {...props} exact />}
          />

          <Route
            path="/random-beer"
            render={(props) => <RandomBeer {...props} exact />}
          />
          {/* <Route path="/new-beer" component={NewBeer} exact />  */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
