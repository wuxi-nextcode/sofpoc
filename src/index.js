import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './vendor/fhir-client-cerner-additions-1.0.0.js'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
