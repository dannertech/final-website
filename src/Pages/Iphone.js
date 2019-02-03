import React, { Component } from 'react';
import NavigationBar from '../Components/Navigation'

export default class Iphone extends Component {
    render(){
        return (
            <div>
                <NavigationBar />
                <p>You're at the Iphone page</p>
            </div>
        )
    }
}