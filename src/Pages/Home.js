import React, { Component } from 'react'
import Navigation from '../Components/Navigation'
import styled from 'styled-components'

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
      <div>
        <h2>Alexa</h2>
        </div>
      <div>
        <h2>iOS</h2>
      </div>
      <div>
        <h2>Web</h2>
      </div>
        </div>
      </div>
    )
  }
}
