// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCZSXjwVOKQACziAQXU56yjZSqSaFIfN7A",
    authDomain: "poomier-league.firebaseapp.com",
    databaseURL: "https://poomier-league-default-rtdb.firebaseio.com",
    projectId: "poomier-league",
    storageBucket: "poomier-league.appspot.com",
    messagingSenderId: "132324143576",
    appId: "1:132324143576:web:01b5a006f77542136282ad",
    measurementId: "G-GJHJ484NMP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);