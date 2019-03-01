import React, { Component } from 'react';
import axios from 'axios';
import { NavLink, Route } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSmurf: null,
      smurfs: []
    };
  }

  // Read

  componentDidMount() {
    axios.get('http://localhost:3333/smurfs')
      .then(res => {
        console.log(res)
        this.setState({
          smurfs: res.data
        })
      })
  }

  // Create

  addSmurf = (e, smurf) => {
    e.preventDefault();
    axios.post('http://localhost:3333/smurfs', smurf)
      .then(res => {
        this.setState({
          smurfs: res.data
        });
        this.props.history.push('/');
      })

    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  // Delete

  deleteSmurf = (e, id) => {
    e.preventDefault();
    axios.delete(`http://localhost:3333/smurfs/${id}`, id)
      .then(res =>{
        this.setState({
          smurfs: res.data
        });
        this.props.history.push('/');
      })
  }

  // Update

  prepopulateForm = (e, smurf) => {
    e.preventDefault();
    this.setState({
      activeSmurf: smurf
    });
    this.props.history.push('/smurf-form')
  }

  updateSmurf = (e, smurf) => {
    e.preventDefault();
    axios.put(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
      .then(res =>{
        console.log(res)
        this.setState({
          smurfs: res.data
        });
        this.props.history.push('/');
      })
  }

  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <NavLink to='/'>Smurf List</NavLink>
        <NavLink to='/smurf-form'>Add a Smurf</NavLink>

        {/* Routes */}
        <Route 
        path='/smurf-form'
        render={props => (
          <SmurfForm
            {...props}
            addSmurf={this.addSmurf}
            activeSmurf={this.state.activeSmurf}
            updateSmurf={this.updateSmurf}
          />
        )}
        />
        <Route 
        exact
        path='/'
        render={props => (
          <Smurfs 
            {...props}
            smurfs={this.state.smurfs}
            deleteSmurf={this.deleteSmurf}
            prepopulateForm={this.prepopulateForm}
          />
        )}
        />

      </div>
    );
  }
}

export default App;
