import React, { Component } from 'react';
import NavigationBar from '../Components/Navigation'

import Powerup from '../Images/Powerup.png'

import styled from 'styled-components'

const StyledLinkButton = styled.a`
background: black;
color: white;
text-decoration: none;
border-radius: 25px;
padding: 7px;
box-shadow: 5px 5px grey;
font-family: 'Raleway', sans-serif;

`



const StyledProjectCard = styled.div`
margin: 27px 307px 0px 307px;
display: flex;
text-align: center;
flex-direction: column;
font-family: 'Raleway', sans-serif;
`

const StyledHeader = styled.h1`
text-align: center;
`

export default class Web extends Component {
  render() {
    return (
      <div>
          <NavigationBar/>
          <StyledHeader>Web Apps</StyledHeader>
          <StyledProjectCard>
                    <div>
                <img src={Powerup} alt="Image of a black thunderbolt against a white background"></img>
                <p>Because I love technology and electric cars, I decided to build a tool that allows users to find car charging stations near them! This web application utilizes a 3rd party API to generate the app with an array of chargers in each city and the user can easily access that information using my web application. Electric cars will rule the world.</p>
                </div>
                <div>
                <StyledLinkButton href="https://powerup-charging.herokuapp.com/">Try it Out</StyledLinkButton>
                </div>
              </StyledProjectCard>
      </div>
    )
  }
}
