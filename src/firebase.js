import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB4svMGE4qXhzotiupav5a3EQxLvZYDl4c",
    authDomain: "clone-by-rm.firebaseapp.com",
    projectId: "clone-by-rm",
    storageBucket: "clone-by-rm.appspot.com",
    messagingSenderId: "249699681736",
    appId: "1:249699681736:web:1f90cfd0bf748b3c93acfd",
    measurementId: "G-X4HJ1W7RT5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };



