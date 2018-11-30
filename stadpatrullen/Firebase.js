//<script src="https://www.gstatic.com/firebasejs/5.6.0/firebase.js"></script>
import * as firebase from "firebase";
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD0QBRnvIJx5tDmuG94zGOD1OhCV9wFsSw",
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