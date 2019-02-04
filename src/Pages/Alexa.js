import React, { Component } from 'react';
import NavigationBar from '../Components/Navigation'
import styled from 'styled-components'

//import images
import EightBall from '../Images/eight-ball.png'
import CatFacts from '../Images/cat-icon.png'
import MyBestFriend from '../Images/Alexis-logo.png'
import Cheerup from '../Images/cheerup.png'
import SimpsonSpeak from '../Images/simpson-speak-donut.png'

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

export default class Alexa extends Component {
    render(){
        return(
            <div>
                <NavigationBar />
                <p>You're at the Alexa page</p>
                
                    <StyledHeader>Alexa Apps</StyledHeader>
                <StyledProjectCard>
                    <div>
                <img src={Cheerup} alt="Image of air balloon on orange background"></img>
                <p>InspirationDaily is an Alexa app (with a compatible iOS application!) that allows the user to hear inspirational messages upon request.</p>
                </div>
                <div>
                <StyledLinkButton href="https://www.amazon.com/gp/product/B07JFVNDXH?ie=UTF8&ref-suffix=ss_rw">Try it Out</StyledLinkButton>
                </div>
              </StyledProjectCard>
              <StyledProjectCard>
                    <div>
                <img src={CatFacts} alt="Image of a cat's face against a green background"></img>
                <p>CatFacts is an Alexa application that retrieves data from a 3rd party API to give the user a fact about cats!</p>
                </div>
                <div>
                <StyledLinkButton href="https://www.amazon.com/gp/product/B07L4FLFW6?ie=UTF8&ref-suffix=ss_rw">Try it Out</StyledLinkButton>
                </div>
              </StyledProjectCard>
              <StyledProjectCard>
                    <div>
                <img src={EightBall} alt="Image of an 8 in a camoflauge triangle"></img>
                <p>Millennial Eight Ball was a simple yet fun Alexa app that allows the user to ask Alexa a question and Alexa responds with an answer reminiscent of an Eight Ball but in the words of a young Millennial. This app was fun and I hope to change the actual voice of Alexa!</p>
                </div>
                <div>
                <StyledLinkButton href="https://www.amazon.com/gp/product/B07L4FLFW6?ie=UTF8&ref-suffix=ss_rw">Try it Out</StyledLinkButton>
                </div>
              </StyledProjectCard>
            </div>
        )
    }
}