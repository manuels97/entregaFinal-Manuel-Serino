
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyDCetL5Fxn_oSJtlvXBxSwWgfFlrOy6ueo",
    authDomain: "quila-9d657.firebaseapp.com",
    projectId: "quila-9d657",
    storageBucket: "quila-9d657.appspot.com",
    messagingSenderId: "747560582062",
    appId: "1:747560582062:web:818960a17c37e50f57263f",
    measurementId: "G-MVFNBHYX0N"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const mt = firebase.firestore();

