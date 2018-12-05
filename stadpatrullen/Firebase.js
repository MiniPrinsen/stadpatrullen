//<script src="https://www.gstatic.com/firebasejs/5.6.0/firebase.js"></script>
import * as firebase from "firebase";
import { FIREBASE_REACT_NATIVE_API_KEY } from 'react-native-dotenv'

  // Initialize Firebase
  var config = {
    apiKey: FIREBASE_REACT_NATIVE_API_KEY,
    authDomain: "stadpatrullen-a7783.firebaseapp.com",
    databaseURL: "https://stadpatrullen-a7783.firebaseio.com",
    projectId: "stadpatrullen-a7783",
    storageBucket: "stadpatrullen-a7783.appspot.com",
    messagingSenderId: "27796812779"
  };

  export default class Firebase {
      static auth;
      static init() {
          console.log("HELLO, HERE I AM");
          firebase.initializeApp(config);
          Firebase.auth = firebase.auth();
      }
  }