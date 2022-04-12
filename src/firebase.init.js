// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCtbjlFLboP_s6IJALHken9TomWSCBF9Gw",
    authDomain: "router-firebase-integrat-904fe.firebaseapp.com",
    projectId: "router-firebase-integrat-904fe",
    storageBucket: "router-firebase-integrat-904fe.appspot.com",
    messagingSenderId: "932111121497",
    appId: "1:932111121497:web:ffce73923f217c595a0548"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;