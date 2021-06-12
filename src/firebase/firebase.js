import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: process.env.REACT_APP_FIREBASE,
    authDomain: "student-details-23ba0.firebaseapp.com",
    projectId: "student-details-23ba0",
    storageBucket: "student-details-23ba0.appspot.com",
    messagingSenderId: "455372253942",
    appId: "1:455372253942:web:b9f4d079958cac98355ad7",
    measurementId: "G-JEMF9EJ9PW"
}

const firebase = Firebase.initializeApp(config);
const db = firebase.firestore();
const auth = firebase.auth();

export { firebase, db, auth };