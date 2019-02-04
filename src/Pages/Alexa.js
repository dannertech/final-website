import React, { Component } from 'react';
import NavigationBar from '../Components/Navigation'
import styled from 'styled-components'

//import images
import EightBall from '../Images/eight-ball.png'
import CatFacts from '../Images/cat-icon.png'
import MyBestFriend from '../Images/Alexis-logo.png'
import Cheerup from '../Images/cheerup.png'
import SimpsonSpeak from '../Images/simpson-speak-donut.png'

const StyledHeader = styled.h1`
text-align: center;
`

export default class Alexa extends Component {
    render(){
        return(
            <div>
                <NavigationBar />
                <p>You're at the Alexa page</p>
                
                    <StyledHeader>Alexa Apps</StyledHeader>
                <div>
                <img src=""
                </div>
            </div>
        )
    }
}