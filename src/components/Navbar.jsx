import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Navbar = withRouter((props) => {
  return (
    <header className="Navbar">
      <Link to="/">🏠</Link>
    </header>
  );
});

export default Navbar;
