import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCoUH0LYUEn7imcznSBxXwVi5NX0kzwGbM",
    authDomain: "safedrug-c12d1.firebaseapp.com",
    databaseURL: "https://safedrug-c12d1-default-rtdb.firebaseio.com",
    projectId: "safedrug-c12d1",
    storageBucket: "safedrug-c12d1.appspot.com",
    messagingSenderId: "345365845613",
    appId: "1:345365845613:web:b5bb644328ce428df85164",
    measurementId: "G-WV0B99DVQE"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const dbRef = firebaseApp.database().ref();
export default dbRef;