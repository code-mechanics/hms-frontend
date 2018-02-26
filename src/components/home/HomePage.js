/**
 * Created by vadivel on 25/02/18.
 */
import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Hospital Management System</h1>
        <p>Hospital management system application for hospitals functionality</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
      </div>
    );
  }
}


export default HomePage;
