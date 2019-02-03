import React, { Component } from 'react';
import NavigationBar from '../Components/Navigation'

export default class Web extends Component {
  render() {
    return (
      <div>
          <NavigationBar/>
        <p>You're at the Web page</p>
      </div>
    )
  }
}
