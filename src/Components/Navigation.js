import React, { Component } from 'react';
import styled from 'styled-components';
import '../App.css'

const NavigationBar = styled.div`
display: flex;
flex-direction: row;
font-family: 'Major Mono Display', monospace;

`

const StyledLinks = styled.h5`
margin: 0px 37px 0px 0px;
text-decoration: none;
`

export default class Navigation extends Component {
    render() {
        return (
            <NavigationBar>
                <a class="NavLinks" href="#"><StyledLinks>Projects</StyledLinks></a>
                <a class="NavLinks" href="#"><StyledLinks>Contact</StyledLinks></a>
            </NavigationBar>
        )
    }
}