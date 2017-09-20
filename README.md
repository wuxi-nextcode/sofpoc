# SoFPoC

SMART on FHIR Proof of Concept

This is a proof of concept of a SMART app that connects to CSA.

## Scripts

See `package.json`

* `yarn start` to start dev server
* `yarn build` to build a prod build
* `yarn test` to run tests

## FHIR js client lib

Observe that we're including 2 3rd party libs, in src/vendor we've added the FHIR client Cerner additions plugin, as recommended by Cerner. Also, in public/vendor we're including the [SMART on FHIR client lib](https://github.com/smart-on-fhir/client-js) with jQuery included (which I think they only use for network). We should at some point maybe try to use the FHIR.js library directly, we just used this for quick prototyping. However, it has been minified, by running `uglifyjs fhir-client-v0.1.11.js --compress -o fhir-client-v0.1.11.min.js` on the command line. We then include that version in our pages. That was a 50% size reduction.

Additional resources:

* Cerner getting started tutorial: http://engineering.cerner.com/smart-on-fhir-tutorial/
