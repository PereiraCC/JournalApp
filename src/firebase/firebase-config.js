import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyBOm8wGJFacuV-Goquv6mUffIskknA_rGY",
    authDomain: "react-app-cursos-34616.firebaseapp.com",
    projectId: "react-app-cursos-34616",
    storageBucket: "react-app-cursos-34616.appspot.com",
    messagingSenderId: "445890518341",
    appId: "1:445890518341:web:467e6457bd0a9c0938322c"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}