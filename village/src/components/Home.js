import React from 'react'
import styled from 'styled-components';

const HomeWrapper = styled.div`
  
  h1 {
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
  }  
`

const Home = () => {
  return (
    <HomeWrapper>
      <h1>Welcome to the Village!</h1>
    </HomeWrapper>
  )
}

export default Home;