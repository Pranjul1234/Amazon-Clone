// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDcLfy6P_aMnHrNKU_wETukHHZbhvVSkP8",
  authDomain: "ecommerce-website-2109d.firebaseapp.com",
  projectId: "ecommerce-website-2109d",
  storageBucket: "ecommerce-website-2109d.appspot.com",
  messagingSenderId: "539424141632",
  appId: "1:539424141632:web:f35627bfbf99ffc7be4aa5",
  measurementId: "G-W49VEYBTQX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };