import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import App from './components/App';
import './vendor/fhir-client-cerner-additions-1.0.0.js'
// Disable service worker for this prototype, until we're ready to think about it
// (e.g. how would the app work in offline mode wrt the APIs it talks to?)
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
