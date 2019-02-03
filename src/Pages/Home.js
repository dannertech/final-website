import React, { Component } from 'react'
import Navigation from '../Components/Navigation'
import '../App.css'

//pages
import AlexaPage from '../Pages/Alexa'
import IosPage from '../Pages/Iphone'
import WebPage from '../Pages/Web'

//images
import iOS from '../Images/website-ios.png'
import Alexa from '../Images/website-alexa.png'
import iMac from '../Images/website-imac.png'

//import stuff to style
import styled from 'styled-components'

import { Link } from 'react-router-dom';




const Cards = styled.div`
margin: 37px 0px 0px 0px;
display: flex;
flex-wrap: wrap;
justify-content: space-around;


`

const CardDesign = styled.div`
text-align: center;
background-color: black;
border-radius: 20px;
color: white;


`

const Header = styled.h1`
margin: 77px 0px 0px 0px;
display: flex;
justify-content: center;
text-align: center;
`

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Header>Pick A Platform</Header>
        <div>
          <Cards>
      <Link class="Link" to="/alexa"><CardDesign class="Card">
        <h2>Alexa</h2>
        <img src={Alexa} alt="Alexa"></img>
        </CardDesign></Link>
      <Link class="Link" to="/ios"><CardDesign class="Card">
        <h2>ios</h2>
        <img src={iOS} alt="iPhone"></img>
      </CardDesign></Link>
      <Link class="Link" to="/web"><CardDesign class="Card">
        <h2>Web</h2>
        <img src={iMac} alt="iMac"></img>
      </CardDesign></Link>
      </Cards>
        </div>
        
      </div>
    )
  }
}
