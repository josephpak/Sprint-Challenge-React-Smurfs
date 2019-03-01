import React from 'react';
import SmurfCard from './SmurfCard';

const SmurfPage = props => {

    const smurf = props.smurfs.find(smurf => `${smurf.id}` === props.match.params.id)
    if (!smurf) {
        return <h3>Loading items...</h3>;
    }
    return (
        <div>
            <SmurfCard 
            name={smurf.name}
            id={smurf.id}
            age={smurf.age}
            height={smurf.height}
            key={smurf.id}
            smurf={smurf}
            deleteSmurf={props.deleteSmurf}
            prepopulateForm={props.prepopulateForm}
            />
        </div>
    )
}

export default SmurfPage;