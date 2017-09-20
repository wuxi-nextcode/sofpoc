/**
* Wrapper object containing additional feature or settings
* to the open source version of fhir-client.js file.
*/
var FhirClientCernerAdditions = {

  /**
  * Override fullSessionStorageSupport flag in fhir-client.js (src/client/bb-client.js) file.
  * The value depends on whether the page is loaded in PowerChart or
  * a regular browser that supports sessionStorage API without session being shared across tabs.
  */
  setFullSessionStorageSupport: function setFullSessionStorageSupport() {
    FHIR.oauth2.settings.fullSessionStorageSupport = !Utils.isPowerChart();
  }
}; /* globals FHIR */


/**
* This Utils object contains util function(s) needed by this project.
* All the functions in this file can be moved to fhir-client-cerner-additions.js file,
* however having them here make it easier to write tests.
*/
var Utils = {

  /**
  * Determine if application is rendered in PowerChart.
  * @return null or true/false
  */
  isPowerChart: function isPowerChart() {
    return window.external && typeof window.external.DiscernObjectFactory !== 'undefined';
  }
};

exports.default = Utils;
exports.default = FhirClientCernerAdditions;
