import React, { Component } from 'react';
import axios from 'axios';
import { NavLink, Route } from 'react-router-dom';
import styled from 'styled-components';

import './reset.css';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import SmurfPage from './components/SmurfPage';
import Home from './components/Home'

const AppWrapper = styled.div`
  padding: 0 6%;
  font-size: 62.5%;
  box-sizing: border-box;
  font-family: sans-serif;
  font-size: 1rem;
`

const NavWrapper = styled.nav`
  display: flex;
  height: 50px;
  align-items: center;
  width: 100%;
  justify-content: flex-end;

  a {
    text-decoration: none;
    color: black;
    padding: 10px;
  }
`

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
`

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
        this.props.history.push('/smurf-list');
      })

  }

  // Delete

  deleteSmurf = (e, id) => {
    e.preventDefault();
    axios.delete(`http://localhost:3333/smurfs/${id}`, id)
      .then(res =>{
        this.setState({
          smurfs: res.data
        });
        this.props.history.push('/smurf-list');
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
          activeSmurf: null,
          smurfs: res.data
        });
        this.props.history.push('/smurf-list');
      })

  }

  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <AppWrapper>
        <NavWrapper>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/smurf-list'>Smurf Village</NavLink>
          <NavLink to='/smurf-form'>Add a Smurf</NavLink>
        </NavWrapper>
        
        <ContentWrapper>
        {/* Routes */}
        <Route 
        exact
        path='/'
        component={Home}
        />
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
        path='/smurf-list'
        render={props => (
          <Smurfs 
            {...props}
            smurfs={this.state.smurfs}
            deleteSmurf={this.deleteSmurf}
            prepopulateForm={this.prepopulateForm}
          />
        )}
        />
        <Route
          path="/smurf/:id"
          render={props => (
            <SmurfPage
              {...props}
              smurfs={this.state.smurfs}
              deleteSmurf={this.deleteSmurf}
              prepopulateForm={this.prepopulateForm}
            />
          )}
        />
        </ContentWrapper>

      </AppWrapper>
    );
  }
}

export default App;
