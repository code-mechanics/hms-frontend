/**
 * Created by vadivel on 25/02/18.
 */
import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/about" activeClassName="active">About</Link>
      {" | "}
      <Link to="/doctors" activeClassName="active">Doctors</Link>
    </nav>
  );
};

export default Header;
