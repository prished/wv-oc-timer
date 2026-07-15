/* Water Vipers OC Timer — Firebase config
   -----------------------------------------
   Fill this in with your own free Firebase project's keys.
   See README.md → "Setting up realtime sync" for the exact steps.

   These values are NOT secret — they're meant to ship inside the app
   (every Firebase web app includes them in plain sight). What actually
   protects your data is the Realtime Database security rules you set
   in the Firebase console, not hiding these values. The README shows
   the rules to paste in.

   Until you fill this in, the app runs perfectly well in local-only
   mode: each phone times independently and volunteers reconcile at
   the dock, same as before this feature existed.
*/
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyDXwVxHB5Nc_ruJ2Qb0AFbTAsRXX1oxCBw",
  authDomain: "wv-oc-timer.firebaseapp.com",
  projectId: "wv-oc-timer",
  storageBucket: "wv-oc-timer.firebasestorage.app",
  messagingSenderId: "1019791592692",
  appId: "1:1019791592692:web:97d36055cdc1468e8c22a1"
};
