// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const baseAPIURL = "http://localhost:3000";
export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyA-13kbt2molUFRShMo9LFluC85vAdAnkM",
    authDomain: "we16301-angular.firebaseapp.com",
    projectId: "we16301-angular",
    storageBucket: "we16301-angular.appspot.com",
    messagingSenderId: "504388707705",
    appId: "1:504388707705:web:ee677906c30e5d01e17ba8",
    measurementId: "G-EFVNZYBN62"
  },
  GOOGLE_CLIENT_ID: '504388707705-chtk57vdl8pk212onvojuqg201e0h8n8.apps.googleusercontent.com',
  base_api: baseAPIURL,
  student_api: `${baseAPIURL}/students`,
  subject_api: `${baseAPIURL}/subjects`
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
