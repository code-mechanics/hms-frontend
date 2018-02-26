/**
 * Created by vadivel on 25/02/18.
 */
import React from 'react';
import {Link} from 'react-router';

class AboutPage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>About</h1>
        <p>This application uses REact, Redux, React-router and a variety of other
        helpful libraries</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
      </div>
    );
  }
}


export default AboutPage;
