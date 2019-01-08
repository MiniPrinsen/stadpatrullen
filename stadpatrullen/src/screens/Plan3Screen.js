// Plan3.js

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
  cloudImage: {
    flex: 1,
    zIndex: 0,
    position: 'relative',
    resizeMode: 'contain',
    marginLeft: "40%",
  
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
  zoneOnePlanThree: {
    height: 100,
    width: 75,
    backgroundColor: "#000",
  },
  zoneTwoPlanThree: {
    height: 100,
    width: 75,
    backgroundColor: "#909090",
    marginTop: "1%"
  },
  zoneThreePlanThree: {
    height: 100,
    width: 75,
    backgroundColor: "#707070",
    marginTop: "1%"
  }
});

export default class Plan3Screen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null,

    }
  }


  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0' }}>
      <Image style={styles.cloudImage}source={require('../../assets/Cloud.png')}/>
        <Text style={styles.headerText}>  NATURVETARHUSET</Text>
        <View style={styles.zoneOnePlanThree}></View>
        <View style={styles.zoneTwoPlanThree}></View>
        <View style={styles.zoneThreePlanThree}></View>
        <Text style={styles.planText}>Plan 3</Text>
        {/* <Button
          title="Go to Plan 4"
          onPress={() => this.props.navigation.navigate('Plan 4')}
        />*/}
        
      </View>
    );
  }
}