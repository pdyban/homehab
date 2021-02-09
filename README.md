# Mobile-first OpenHAB UI powered by React.js

This web app offers Apple Homekit-inspired user interface for controlling
your OpenHAB-managed smart home.

A running web app can be found on Heroku: [https://homehab.herokuapp.com/](https://homehab.herokuapp.com/).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

You can deploy and run this using serve:

# OpenHAB Setup
OpenHAB's ReST API does not permit CORS by default. You need to enable CORS by
modifying `/conf/services/runtime.cfg` file:

```
##################### CORS #####################
# Allow CORS for Rest API access from other hostnames.
org.eclipse.smarthome.cors:enable=true
# For OpenHAB v.3 uncomment the following line:
# org.openhab.cors:enable=true
```
