//import { DARESAY_SENSOR_API_PLAN3, DARESAY_SENSOR_API_PLAN4 } from 'react-native-dotenv';


// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');
const fetch = require('node-fetch');
const Client = require('node - rest - client').Client
const BACKEND_URL = "https://daresay.herokuapp.com/nv/plan/4/all?key=41938416368104621"

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();


const client = new Client()
exports.fetch = functions.https.onRequest((req, res) => {
    client.get(BACKEND_URL, function (data, response) {

      // TODO Clean up

        return res.status(200)
            .type('application / json')
            .send(data)
    })
 }) 

// exports.getSensordata = functions.https.onRequest((req, res) => {

//     fetch('https://daresay.herokuapp.com/nv/plan/4/all?key=41938416368104621', {
//         method: "GET",
//     }).then(res =>{res.json()
//         .then(res2 => {console.log(res2)})
//     .catch(err => {console.log(err)})
//     //const result = yield fetch(DARESAY_SENSOR_API_PLAN4)

//     //const json = yield res.json();

//     //console.log(json)
//     //let data = req.body;
//     //admin.database().ref('/sensors').push(data)

//      // Check for POST request
//     // if(req.method !== "POST") {
//       //   res.status(400).send('Please send a POST request');
//       //   return;
//      //}
//  });

/*exports.fetchSensortData = functions.https.onRequest((req, res) => {
    let url = ''

    return request(url)
        .then(data => cleanUp(data))
        .then(items => save(items))
        .then(items => response(res, items, 201))
 });
 
 function request(url) {
    return new Promise(function (fulfill, reject) {
        client.get(url, function (data, response) {
            fulfill(data)
        })
    })
 }
 
 function response(res, items, code) {
    return Promise.resolve(res.status(code)
        .type('application/json')
        .send(items))
 }

 
 function save(items) {
    return admin.database().ref('/')
        .set({ items: items })
        .then(() => {
            return Promise.resolve(items);
        })
 }*/











// Take the text parameter passed to this HTTP endpoint and insert it into the
// Realtime Database under the path /messages/:pushId/original
exports.addMessage = functions.https.onRequest((req, res) => {

    let url = 'https:www.google.se'
    fetch(url);
  // Grab the text parameter.
  const original = req.query.text;
  // Push the new message into the Realtime Database using the Firebase Admin SDK.
  return admin.database().ref('/messages').push({original: original}).then((snapshot) => {
    // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
    return res.redirect(303, snapshot.ref.toString());
  });
});

// Listens for new messages added to /messages/:pushId/original and creates an
// uppercase version of the message to /messages/:pushId/uppercase
exports.makeUppercase = functions.database.ref('/messages/{pushId}/original')
    .onCreate((snapshot, context) => {
      // Grab the current value of what was written to the Realtime Database.
      const original = snapshot.val();
      console.log('Uppercasing', context.params.pushId, original);
      const uppercase = original.toUpperCase();
      // You must return a Promise when performing asynchronous tasks inside a Functions such as
      // writing to the Firebase Realtime Database.
      // Setting an "uppercase" sibling in the Realtime Database returns a Promise.
      return snapshot.ref.parent.child('uppercase').set(uppercase);
    });
    //URL for callback
    //https://us-central1-stadpatrullen-a7783.cloudfunctions.net/addMessage?text=uppercasemetoo
