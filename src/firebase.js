
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBqT1vwIubU5TUTrI5dqBYPwqm-YpmH8I4",
    authDomain: "th-sem-online-store.firebaseapp.com",
    projectId: "th-sem-online-store",
    storageBucket: "th-sem-online-store.appspot.com",
    messagingSenderId: "551269906934",
    appId: "1:551269906934:web:2cc40857b704727585efd7",
    measurementId: "G-GWDTNTW30Y"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };