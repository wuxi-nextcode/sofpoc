import React, { Component } from 'react';
import MainHeader from '../MainHeader';
import AuthenticationError from '../AuthenticationError';
import Patient from '../Patient';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state= {
      hasError: false,
      patient: null
    }
  }

  authDone = (smart) => {
    console.log('SMART object', smart);

    this.setState({
      patient: smart.patient
    });
  }

  authError = (error) => {
    console.error(error);
    this.setState({ hasError: true });
  }

  componentDidMount() {
    window.FHIR.oauth2.ready(this.authDone, this.authError);
  }

  render() {
    const { patient } = this.state;

    return (
      <div className="app-container">
        <MainHeader />
        {
          this.state.hasError ?
            <AuthenticationError /> :
          this.state.patient ?
            <Patient patient={patient} /> : <p>Loading app...</p>
        }
      </div>
    );
  }
}

export default App;
