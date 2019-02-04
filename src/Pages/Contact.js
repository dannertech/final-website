import React, { Component } from 'react';
import NavigationBar from '../Components/Navigation'
import '../App.css'

import styled from 'styled-components'

const StyledHeader = styled.h1`
margin: 107px 0px 0px 0px;
text-align: center;
`

const ContactCard = styled.div`

background-color: black;
color: white;
font-family: 'Raleway', sans-serif;
border-radius: 15px;
margin: 107px 507px;
text-align: center;
box-shadow: 5px 7px grey;

`

export default class Contact extends Component {
    render(){
        return(
           
            <div>
                <NavigationBar />
                <StyledHeader>Hit Me Up!</StyledHeader>
                <ContactCard id="ContactCard">
<h1>Phone Number</h1>
<p>(404)734-4136</p>
<h1>Email</h1>
<p>danner@danner.tech</p>
                </ContactCard>
            </div>
        )
    }
}
