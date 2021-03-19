import React, { Component } from 'react';
import Navbar from './../components/Navbar';
import { listBeers } from './../services/beer-api';
import { Link } from 'react-router-dom';

class ListBeers extends Component {
  state = {
    list: [],
  };

  componentDidMount() {
    this.loadList();
  }

  async loadList() {
    const list = await listBeers();
    this.setState({
      list: list,
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <ul>
          {this.state.list.map((beer, index) => (
            <li key={beer._id} className="beerlist">
              <img className="beerimg" src={beer.image_url} />
              <Link to={`/beers/${beer._id}`}>
                <h1 className="singlebeerlink">{beer.name}</h1>
              </Link>
              <h3>{beer.tagline}</h3>
              <p>
                {' '}
                <strong>Created by:</strong> {beer.contributed_by}
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ListBeers;
