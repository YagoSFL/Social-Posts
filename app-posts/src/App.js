import '../node_modules/materialize-css/dist/css/materialize.min.css'
import '../node_modules/materialize-css/dist/js/materialize.min.js'
import './template/custom.css'

import React, { Component } from 'react';
import Menu from './template/menu'
import Social from './social/social'

export default class App extends Component {
  render() {
    return (
      <div>
        <Menu icon_size='medium' />
        <Social />
      </div>
    );
  }
}


