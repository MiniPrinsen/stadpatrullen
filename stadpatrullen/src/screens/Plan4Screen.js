// Plan4.js

import React from 'react';
import { Button, Text, View, Image } from 'react-native';
import { StyleSheet } from 'react-native';


let styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    zIndex: 0,
    position: 'absolute',
    resizeMode: 'cover', // or 'stretch'
  }
});
export default class Plan4Screen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0' }}>
        <Image source={require('../../assets/Sunny.png')} style={styles.backgroundImage } />
        <Text>Plan 4!</Text>
        {/* <Button
          title="Go to Plan 3"
          onPress={() => this.props.navigation.navigate('Plan 3')}
        />*/}
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        /> 
      </View>
      
    );
  }
}