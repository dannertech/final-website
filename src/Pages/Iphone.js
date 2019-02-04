import React, { Component } from 'react';
import NavigationBar from '../Components/Navigation'

import Cheerup from '../Images/cheerup.png'
import Safeplace from '../Images/safeplace.png'

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


export default class Iphone extends Component {
    render(){
        return (
            <div>
                <NavigationBar />
                    <StyledHeader>iOS Apps</StyledHeader>
                <StyledProjectCard>
                    <div>
                <img src={Cheerup} alt="Image of air balloon on orange background"></img>
                <p>Cheerup is an iOS app (with a compatible Alexa application!) that allows the user to post a positive message and see messages posted by others. You can never have too much positivity right?</p>
                </div>
                <div>
                <StyledLinkButton href="https://itunes.apple.com/us/app/cheerups/id1450608793?mt=8">Try it Out</StyledLinkButton>
                </div>
              </StyledProjectCard>
              <StyledProjectCard>
                    <div>
                <img src={Safeplace} alt="Image of a house made out of popsicle sticks"></img>
                <p>SafePlace is an iOS application that allows the user to find resources near them such as food pantries and homeless shelters. It also allows organizations to login and provide resources to users that request assistance. I would like to improve the UI however this was my first app for iPhone and I am extremely proud of myself for building it. Check it out!</p>
                </div>
                <div>
                <StyledLinkButton href="https://itunes.apple.com/us/app/asafeplace/id1435963407?mt=8">Try it Out</StyledLinkButton>
                </div>
              </StyledProjectCard>
          
      
             
            </div>
        )
    }
}