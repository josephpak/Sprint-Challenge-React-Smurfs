import React from 'react';
import { Link } from 'react-router-dom';

const SmurfCard = props => {
  return (
    <div className="Smurf">
        <h3>{props.name}</h3>
        <strong>{props.height} tall</strong>
        <p>{props.age} smurf years old</p>
        <button
        onClick={e => props.prepopulateForm(e, props.smurf)} 
        >Update Smurf</button>
        <button
        onClick={e => props.deleteSmurf(e, props.id)} 
        >Banish Smurf</button>
    </div>
  );
};

SmurfCard.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default SmurfCard;

