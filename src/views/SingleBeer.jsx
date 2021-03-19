import React, { Component } from 'react';
import Navbar from './../components/Navbar';
import { loadSingleBeer } from './../services/beer-api';

export class SingleBeer extends Component {
  state = {
    beer: null,
  };

  componentDidMount() {
    this.loadBeer();
  }

  componentDidUpdate(previousProps) {
    if (previousProps.match.params.id !== this.props.match.params.id) {
      this.loadBeer();
    }
  }

  async loadBeer() {
    const id = this.props.match.params.id;
    const beer = await loadSingleBeer(id);
    this.setState({
      beer: beer,
    });
  }

  render() {
    const beer = this.state.beer;
    console.log(beer);

    return (
      <div>
        <Navbar />
        {this.state.beer && (
          <>
            <img className="beerimg" src={beer.image_url} />
            <h1>{beer.name}</h1>
            <h3>{beer.tagline}</h3>
            <span>
              <strong>{beer.first_brewed}</strong>
            </span>
            <p>{beer.description}</p>
            <span>{beer.contributed_by}</span>
          </>
        )}
      </div>
    );
  }
}

export default SingleBeer;
