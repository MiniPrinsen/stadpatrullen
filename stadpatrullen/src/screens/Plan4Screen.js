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
  },
  sunImage: {
    flex: 1,
    zIndex: 0,
    position: 'relative',
    resizeMode: 'contain',
    marginLeft: "45%",
  
    width: "100%",
    height: "100%",
  },
  headerText: {
    fontSize: 24,
    zIndex: 3,
    position: 'relative',
    marginBottom: "10%",
    color: "#707070",
    zIndex: 1,
  },
  planText: {
    fontSize: 46,
    color: "#707070",
    marginTop: "40%",
  },
  zoneOnePlanFour: {
    height: 100,
    width: 75,
    backgroundColor: "#000",
  },
  zoneTwoPlanFour: {
    height: 100,
    width: 75,
    backgroundColor: "#909090",
    marginTop: "1%"
  },
  zoneThreePlanFour: {
    height: 100,
    width: 75,
    backgroundColor: "#707070",
    marginTop: "1%"
  }
});
export default class Plan4Screen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0' }}>
      <Image style={styles.sunImage}source={require('../../assets/Sun.png')}/>
        <Text style={styles.headerText}>  NATURVETARHUSET</Text>
        <View style={styles.zoneOnePlanFour}></View>
        <View style={styles.zoneTwoPlanFour}></View>
        <View style={styles.zoneThreePlanFour}></View>
        <Text style={styles.planText}>Plan 4</Text>
        {/* <Button
          title="Go to Plan 4"
          onPress={() => this.props.navigation.navigate('Plan 4')}
        />*/}
        
      </View>
      
    );
  }
}