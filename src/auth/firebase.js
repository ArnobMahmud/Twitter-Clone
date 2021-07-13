// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCwvVkb5QMdXQED9r5ek8hd_T3fxY9fcSQ",
  authDomain: "twitter-clone-c2e7a.firebaseapp.com",
  projectId: "twitter-clone-c2e7a",
  storageBucket: "twitter-clone-c2e7a.appspot.com",
  messagingSenderId: "357184065059",
  appId: "1:357184065059:web:4023fed603f4acb2146b96",
  measurementId: "G-ZHKHF2BP8E",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider };
export default db;
