import React from 'react';
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom';
import Home from './views/Home';
import ListBeers from './views/ListBeers';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/beers" component={ListBeers} exact />
          {/* <Route path="/random-beer" component={RandomBeer} exact />
        <Route path="/new-beer" component={NewBeer} exact /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
