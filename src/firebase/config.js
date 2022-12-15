import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBwAYkNY4A6Y-X4A3VGBSeWRw7-5oCSgRA",
  authDomain: "olx-clone-54e6a.firebaseapp.com",
  projectId: "olx-clone-54e6a",
  storageBucket: "olx-clone-54e6a.appspot.com",
  messagingSenderId: "208938001487",
  appId: "1:208938001487:web:7936017d4e95ba92b2f63a",
  measurementId: "G-EBWHLFJRFZ"
};
  export default firebase.initializeApp(firebaseConfig)