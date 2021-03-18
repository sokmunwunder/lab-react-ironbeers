import React, { Component } from 'react';
import Navbar from './../components/Navbar';
import { listBeers } from './../services/beer-api';

class ListBeers extends Component {
  render() {
    return (
      <div>
        <Navbar />
      </div>
    );
  }
}

export default ListBeers;
