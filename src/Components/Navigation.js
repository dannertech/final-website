import React, { Component } from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

import Home from '../Pages/Home'
import Contact from '../Pages/Contact'
import '../App.css'

const NavigationBar = styled.div`
display: flex;
flex-direction: row;
font-family: 'Major Mono Display', monospace;

`

const StyledLinks = styled.h3`
margin: 0px 37px 0px 0px;
text-decoration: none;
`

export default class Navigation extends Component {
    render() {
        return (
            <NavigationBar>
                <Link class="NavLinks" to="/"><StyledLinks>Projects</StyledLinks></Link>
                <Link class="NavLinks" to="/Contact"><StyledLinks>Contact</StyledLinks></Link>
            </NavigationBar>
        )
    }
}