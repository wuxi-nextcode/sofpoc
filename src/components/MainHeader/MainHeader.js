import React, { Component } from 'react';
import wxnclogo from './wxnclogo.svg';
import './MainHeader.scss';

export default class MainHeader extends Component {
  render() {
    return (
      <header className="mainheader">
        <img src={wxnclogo} alt="WuXi NextCODE logo" />
        <p className="maintitle">SoFPoC - SMART on FHIR Proof of Concept!</p>
      </header>
    );
  }
}
