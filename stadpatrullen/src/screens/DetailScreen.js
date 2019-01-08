// Home.js

import React from 'react';
import { Text, View, Image } from 'react-native';
import { StyleSheet } from 'react-native';


let styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    zIndex: 0,
    position: 'absolute',
    resizeMode: 'cover', // or 'stretch'
  },
});

export default class DetailScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={require('../../assets/Rainy.png')} style={styles.backgroundImage } />
        <Text>yohoooo!</Text>
      </View>
    );
  }
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/