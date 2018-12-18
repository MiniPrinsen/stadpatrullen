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

  function callExternalAPI() {
    // import the module
    // var request = require('request');

    // // make the request
    // request('put your external url here', function (error, response, body) {
    //     if (!error && response.statusCode == 200) {
    //     //here put what you want to do with the request
    //     }
    // })
  }

  function setDirtyFactor() {

  }

  function getDirtyFactor() {

  }

  function retrieveFirebaseData(ref) {
    ref.once("value").then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var key = childSnapshot.key;
        var childData = childSnapshot.val().original;
        var messageText = JSON.stringify(childData);
        var parsedMessage = JSON.parse(messageText);
        console.log('This is a key: ' + key);
        console.log(parsedMessage);
      });
   });
  }

  export default class Firebase {
      static auth;
      static init() {
        var firebaseApp = firebase.initializeApp(config);
        var rootRef = firebase.database().ref();
        retrieveFirebaseData(rootRef.child("/messages/"));
        //var ref = rootRef.child("/messages/");
        //console.log('Reference', ref);
        
      }
      // static createRef() {
      //   let hej = app.database();
      //   return hej;
      // }
  }