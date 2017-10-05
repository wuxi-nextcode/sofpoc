# SoFPoC

SMART on FHIR Proof of Concept (this name is deliberately awkward, so that we are compelled to find a proper name at some point).

This is a proof of concept of a SMART app that connects to CSA.

## Scripts

See `package.json`.

* `yarn start` to start dev server
* `yarn build` to build a prod build
* `yarn test` to run tests
* `yarn run deploy` to deploy to https://nextcode-health.github.io/sofpoc

## Current status

We can log in through Cerner ([by launching the app from their code console](https://code.cerner.com/developer/smart-on-fhir/apps)), and fetch a patient resource from their FHIR API.

## Next steps

* Log in to CSA, using the Cerner user, without the user having to enter credentials. Possibly through a new auth service that does not exist yet.
* Post some data that has been fetched from FHIR, to CSA.
* Map out what we will use in the Cerner FHIR API and create a React components library to display those things
* Figure out what this product should do

## Bugfixes / To do

- [ ] Fix an error when access token expires, seems like either FHIR.js or the SMART client js returns an error, can't find `$` (jquery, which is supposed to be bundled with the lib) when trying to use refresh token to refresh access token.
- [ ] Introduce a store, either [MobX](https://mobx.js.org/) or [Redux](http://redux.js.org/), prefer MobX.
- [ ] Find a convenient way to work with different client ids in the app. Should be possible through the built in ENV variable support in create-react-app.

## Working locally

You should be able to work locally on the app by just creating an app in the [Cerner dev portal](https://code.cerner.com/developer/smart-on-fhir/apps) that points to localhost:3000 (the default when you run `yarn start`). You'll need to change the `clientId` in `launch.html` to match the id of the newly created app. This is a bit cumbersome currently, to always have to switch out client ids. See to do above about making the use of multiple client ids easier.

## FHIR.js client lib

Observe that we're including two 3rd party libs, in src/vendor we've added the FHIR client Cerner additions plugin, as recommended by Cerner. Also, in public/vendor we're including the [SMART on FHIR client lib](https://github.com/smart-on-fhir/client-js) with jQuery included (which is only used for network). We should at some point use the FHIR.js library directly via yarn, we just used this for quick prototyping. However, it has been minified, by running `uglifyjs fhir-client-v0.1.11.js --compress -o fhir-client-v0.1.11.min.js` on the command line. We then include that version in our pages. That was a 50% size reduction.

## Resources

* Cerner getting started tutorial: http://engineering.cerner.com/smart-on-fhir-tutorial/
* Cerner dev portal: https://code.cerner.com/developer/smart-on-fhir/apps
* Random React SMART Demo app: https://github.com/smart-on-fhir/patient-browser
* Docs on the JS lib we're using (SMART on FHIR client JS, which builds on fhir.js): http://docs.smarthealthit.org/clients/javascript/
* Cerner SMART docs: http://fhir.cerner.com/smart/
* FHIR docs: https://www.hl7.org/fhir/overview-dev.html
* SMART docs: http://docs.smarthealthit.org/
* create-react-app (on which this project is based) docs: https://github.com/facebookincubator/create-react-app
