import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div>
          <img src="./views/beers.png" alt="All beers" />
          <Link to="/beers">All Beers</Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
            quisquam accusantium id architecto consequuntur repudiandae eius.
            Perspiciatis officiis praesentium dolor vero veritatis, architecto
            nisi quisquam voluptatum. Perferendis nobis necessitatibus incidunt.
          </p>
        </div>
        <div>
          <img src="./views/random-beer.png" alt="All beers" />
          <Link to="/random-beer">Random Beers</Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
            necessitatibus accusantium, rem nostrum autem assumenda aliquid hic
            tempore quaerat eligendi? Velit quia, et in aliquam eos nostrum
            eligendi quae provident?
          </p>
        </div>
        <div>
          <img src="./views/new-beer.png" alt="All beers" />
          <Link to="/new-beer">New Beer</Link>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni,
            accusamus nulla similique asperiores rem ipsam iste deleniti tempore
            obcaecati odit aut dicta natus! Doloremque ipsum debitis asperiores
            reprehenderit praesentium eveniet?
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
