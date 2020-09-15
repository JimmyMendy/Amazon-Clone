import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCqSFNkPTBWbQx2Am469rzhZQYMfCupZno",
  authDomain: "amzcln245.firebaseapp.com",
  databaseURL: "https://amzcln245.firebaseio.com",
  projectId: "amzcln245",
  storageBucket: "amzcln245.appspot.com",
  messagingSenderId: "819949423888",
  appId: "1:819949423888:web:a9f3f2546b6b1d7499e995",
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

