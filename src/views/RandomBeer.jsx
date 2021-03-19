import React, { Component } from 'react';
import Navbar from './../components/Navbar';
import { loadRandomBeer } from './../services/beer-api';

class RandomBeer extends Component {
  state = {
    beer: [],
  };

  componentDidMount() {
    this.loadBeer();
  }

  //   componentDidUpdate(previousProps) {
  //     if (previousProps.match.params.id !== this.props.match.params.id) {
  //       this.loadBeer();
  //     }
  //   }

  async loadBeer() {
    const beer = await loadRandomBeer();
    this.setState({
      beer: beer,
    });
  }

  render() {
    const randomBeer = this.state.beer;
    console.log(randomBeer);
    return (
      <div>
        <Navbar />
        {/* {this.state.beer.map((item) => ( */}
        <>
          <img className="beerimg" src={randomBeer.image_url} />
          <h1>{randomBeer.name}</h1>
          <h3>{randomBeer.tagline}</h3>
          <span>
            <strong>{randomBeer.first_brewed}</strong>
          </span>
          <p>{randomBeer.description}</p>
          <span>{randomBeer.contributed_by}</span>
        </>
        {/* ))} */}
      </div>
    );
  }
}

export default RandomBeer;
