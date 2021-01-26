// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyB01g364mHDgFymrLUI00s-Iiz8cQc1wys",
    authDomain: "mereb-643b5.firebaseapp.com",
    projectId: "mereb-643b5",
    storageBucket: "mereb-643b5.appspot.com",
    messagingSenderId: "661765015005",
    appId: "1:661765015005:web:56f2fbe4a100f495636234",
    measurementId: "G-XP0E0XE17Z"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export {db, auth};
