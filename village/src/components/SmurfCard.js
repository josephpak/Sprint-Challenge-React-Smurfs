import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CardWrapper = styled.div`
  border: 1px solid black;  
  width: 400px;
  height: 100px;
  margin-top: 50px;
  padding: 20px;  
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const ContentWrapper = styled.div`
`

const ButtonWrapper = styled.div`

`

const SmurfCard = props => {
  return (
    <CardWrapper>
        <ContentWrapper>
          <h3>{props.name}</h3>
          <strong>{props.height} tall</strong>
          <p>{props.age} smurf years old</p>
        </ContentWrapper>
        <ButtonWrapper>
          <button
          onClick={e => props.prepopulateForm(e, props.smurf)} 
          >Update Smurf</button>
          <button
          onClick={e => props.deleteSmurf(e, props.id)} 
          >Banish Smurf</button>
        </ButtonWrapper>

    </CardWrapper>
  );
};

SmurfCard.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default SmurfCard;

