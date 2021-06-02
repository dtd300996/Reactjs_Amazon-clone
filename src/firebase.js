// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCwsuro2lqSNo9Hl58TaZcsE4aHFrct6Ug",
  authDomain: "challenge-9a8ef.firebaseapp.com",
  projectId: "challenge-9a8ef",
  storageBucket: "challenge-9a8ef.appspot.com",
  messagingSenderId: "79270834097",
  appId: "1:79270834097:web:af1ccb9b9ac7b1a0ad1790",
  measurementId: "G-GMWF24V2CT"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export {db, auth}