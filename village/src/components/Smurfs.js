import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SmurfCard from './SmurfCard';

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => (
              <Link to={`/smurf/${smurf.id}`}>
              <SmurfCard
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
                smurf={smurf}
                deleteSmurf={this.props.deleteSmurf}
                prepopulateForm={this.props.prepopulateForm}
              />
              </Link>
            )
          )}
        </ul>
      </div>
    );
  }
}

Smurfs.defaultProps = {
 smurfs: [],
};

export default Smurfs;
