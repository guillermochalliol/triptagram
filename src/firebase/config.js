// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC3GfQ36CB3Q51ASGAIVNLhMxQvFVlvb9o",
    authDomain: "triptagram.firebaseapp.com",
    projectId: "triptagram",
    storageBucket: "triptagram.appspot.com",
    messagingSenderId: "301573535761",
    appId: "1:301573535761:web:99f0ce82ede0464c8699b0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const appStorage = firebase.storage();
const appFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { appStorage, appFirestore, timestamp };