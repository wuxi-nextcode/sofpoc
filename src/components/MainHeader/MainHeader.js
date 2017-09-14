import React, { Component } from 'react';
import wxnclogo from './wxnclogo.svg';
// import './Header.css';

export default class MainHeader extends Component {
  render() {
    return (
      <header className="mainheader">
        <img src={wxnclogo} alt="WuXi NextCODE logo" />
      </header>
    );
  }
}
