import React, { Component } from 'react';

class Patient extends Component {
  constructor(props) {
    super(props);

    this.state = {
      patient: null
    }
  }

  fetchPatient = async () => {
    if (this.props.patient) {
      this.setState({
        patient: await this.props.patient.read()
      });
    }
  }

  componentDidMount() {
    this.fetchPatient();
  }

  render() {
    const { patient } = this.state;

    return (
      <div className="patient">
        { patient ? <p>{patient.name[0].text}</p> : <p>No patient</p> }
      </div>
    );
  }
}

export default Patient;
