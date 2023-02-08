import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB94LkWGwnC4mWdfoWW-nlttkoW4H-U_FM",
  authDomain: "rotishoti-516a7.firebaseapp.com",
  projectId: "rotishoti-516a7",
  storageBucket: "rotishoti-516a7.appspot.com",
  messagingSenderId: "140736413140",
  appId: "1:140736413140:web:49eef3694c452b35582a41"
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
