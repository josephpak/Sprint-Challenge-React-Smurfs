import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import SmurfCard from './SmurfCard';

const ListWrapper = styled.div`
  
  padding-top: 50px;

  h1 {
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
  }
  
  a {
    text-decoration: none;
    color: black;
  }
`

class Smurfs extends Component {
  render() {
    return (
      <ListWrapper>
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
      </ListWrapper>
    );
  }
}

Smurfs.defaultProps = {
 smurfs: [],
};

export default Smurfs;
