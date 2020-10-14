import * as firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"



const config = {
    apiKey: "AIzaSyDVqnEngoErJ86w6ebETSOFQhab-dpojV8",
    authDomain: "car-rider-student-tracker.firebaseapp.com",
    databaseURL: "https://car-rider-student-tracker.firebaseio.com",
    projectId: "car-rider-student-tracker",
    storageBucket: "car-rider-student-tracker.appspot.com",
    messagingSenderId: "611486865062",
    appId: "1:611486865062:web:fc943d3e6c4de8156b0667",
    measurementId: "G-QJ56GLJYQB"
}

firebase.initializeApp(config);
export const Auth = firebase.auth;
export const DB = firebase.firestore();