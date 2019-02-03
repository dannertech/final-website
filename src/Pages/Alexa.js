import React, { Component } from 'react';
import NavigationBar from '../Components/Navigation'

export default class Alexa extends Component {
    render(){
        return(
            <div>
                <NavigationBar />
                <p>You're at the Alexa page</p>
            </div>
        )
    }
}