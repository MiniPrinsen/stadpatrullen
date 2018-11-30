import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Firebase from './Firebase';


//import firebase from 'react-native-firebase';

// firebase.auth()
//   .signInAnonymously()
//   .then(credential => {
//     if (credential) {
//       console.log('default app user ->', credential.user.toJSON());
//     }
//   });

export default class App extends React.Component {  

  componentWillMount() {
    console.log("WOHOOOOOOO");
    Firebase.init();
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
