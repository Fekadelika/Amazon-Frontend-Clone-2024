import firebase from "firebase/compatapp";
import {getAuth} from "firebase/auth"
import"firebase/compat/firestore"
import "firebase/compat/auth"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPpHHMP57E_qQJnWfGiY8sORyiNblDkGk",
  authDomain: "clone-c5e9d.firebaseapp.com",
  projectId: "clone-c5e9d",
  storageBucket: "clone-c5e9d.appspot.com",
  messagingSenderId: "136865376083",
  appId: "1:136865376083:web:22effdf9b941d0e3cbe3a6",
};

// Initialize Firebase
const app =firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = app.firestore()
