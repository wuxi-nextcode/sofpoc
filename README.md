# SoFPoC

SMART on FHIR Proof of Concept

This is a proof of concept of a SMART app that connects to CSA.

## Scripts

See `package.json`

* `yarn start` to start dev server
* `yarn build` to build a prod build
* `yarn test` to run tests
* `yarn run deploy` to deploy to https://hrparty.github.io/sofpoc

## FHIR js client lib

Observe that we're including 2 3rd party libs, in src/vendor we've added the FHIR client Cerner additions plugin, as recommended by Cerner. Also, in public/vendor we're including the [SMART on FHIR client lib](https://github.com/smart-on-fhir/client-js) with jQuery included (which is only used for network). We should at some point use the FHIR.js library directly via yarn, we just used this for quick prototyping. However, it has been minified, by running `uglifyjs fhir-client-v0.1.11.js --compress -o fhir-client-v0.1.11.min.js` on the command line. We then include that version in our pages. That was a 50% size reduction.

## Resources:

* Cerner getting started tutorial: http://engineering.cerner.com/smart-on-fhir-tutorial/
* Cerner dev portal: https://code.cerner.com/developer/smart-on-fhir/apps
* Demo app: https://github.com/smart-on-fhir/patient-browser
* Docs on the JS lib we're using (SMART on FHIR client JS): http://docs.smarthealthit.org/clients/javascript/
* Cerner SMART docs: http://fhir.cerner.com/smart/
* https://www.hl7.org/fhir/overview-dev.html
* http://docs.smarthealthit.org/

## TODO:

- [ ] Fix an error when access token expires, seems like either FHIR.js or the SMART client js returns an error, can't find $ (jquery, which is supposed to be bundled with the lib) when trying to use refresh token to refresh access token.
