import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBa9GJSLgGk_fmWEzuyzdAGresZYOmzncQ",
  authDomain: "netflix-clone-5fc26.firebaseapp.com",
  projectId: "netflix-clone-5fc26",
  storageBucket: "netflix-clone-5fc26.appspot.com",
  messagingSenderId: "1015623424205",
  appId: "1:1015623424205:web:7b9a74a001ca704d123184",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
